from shutil import move
from django.db import models
from poker.utils import COLORS,TABLA
from .BASEMOVES import SINGLE,DOUBLES,TRIPLES
# Create your models here.

class Move(models.Model):
    moveName = models.CharField(max_length=200,blank=False,null=False,default='DF_Move')
    #imagenMove = models.ImageField(upload_to='images')
    colors = models.CharField(max_length=1010,null=False,blank=False,default='DEFAULT')
    def __str__(self):
        return self.moveName

    def get_my_doubles(self):
        doubles_list = self.doublecomparation.all()
        return doubles_list
    
    def get_my_version(self):
        versions = self.singleversion.all()
        return versions

class DoubleComparation(models.Model):
    moveId = models.ForeignKey(Move,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)
    nameComparation = models.CharField(max_length=200,null=False,blank=False,default='Comparation')
    colors = models.CharField(max_length=1010,null=False,blank=False,default='DEFAULT')

    def __str__(self):
        return "%s %s "%(self.moveId,self.nameComparation)
    
    def get_my_triples(self):
        triples_list = self.triplecomparation.all()
        return triples_list

    def get_my_version(self):
        versions = self.doubleversion.all()
        return versions

class TripleComparation(models.Model):
    doubleId = models.ForeignKey(DoubleComparation,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)
    nameComparation = models.CharField(max_length=200,null=False,blank=False,default='Comparation')
    colors = models.CharField(max_length=1010,null=False,blank=False,default='DEFAULT')

    def __str__(self):
        return "%s %s "%(self.doubleId,self.nameComparation)
    
    def get_my_version(self):
        versions = self.tripleversion.all()
        return versions

class MovesFactory():
    @staticmethod
    def get():
        pass

    @staticmethod
    def get_all_moves_dict():
        single_moves = Move.objects.all()
        total = []
        for single in single_moves:
            move = {'move':single}
            doubles_list = single.get_my_doubles()
            move['double'] = doubles_list
            move['triple'] = []
            for double in doubles_list:
                triple_list = double.get_my_triples()
                for triple in triple_list:
                    move['triple'].append(triple)
            total.append(move)
            move = {}
        return total
                

    @staticmethod
    def get_all_smoves():
        moves_list = Move.objects.all()
        return moves_list

    @staticmethod
    def get_all_dmoves():
        moves_list = DoubleComparation.objects.all()
        return moves_list
    
    @staticmethod
    def get_triples(id):
        moves_list = TripleComparation.objects.filter(doubleId_id=id)
        return moves_list

    @staticmethod
    def get_base_data(mtype,data):
        try:
            moves = Move.objects.all()
            move = moves.get(id=data['base'])
            doubles = move.get_my_doubles()
            vars = {'moves':moves,'base':move.id,'doubles':doubles,'name':move.__str__(),'tabla':TABLA}
            color = move.colors
            if mtype == 'double':
                doub = doubles.get(id=data['move'])
                triples = doub.get_my_triples()
                vars['name'] = doub.__str__()
                vars['dbase'] = doub.id
                vars['triples'] = triples
                color = doub.colors
            elif mtype == 'triple':
                triples = TripleComparation.objects.filter(doubleId_id=data['move'])
                triple = triples.get(id=data['Tmove'])
                vars['name'] = triple.__str__()
                vars['dbase'] = int(data['move'])
                vars['tbase'] = triple.id
                vars['triples'] = triples
                color = triple.colors
            vars['load_table'] = MovesFactory.load_table(color)
            return vars  
        except Exception as e:
            print("Error al cargar datos admin",e,data)
            return {'tabla':TABLA}
    
    @staticmethod
    def get_base_data_admin(mtype,data):
        try:
            moves = Move.objects.all()
            move = moves.get(id=data['base'])
            doubles = move.get_my_doubles()
            vars = {'moves':moves,'base':move.id,'doubles':doubles,'name':move.__str__(),'tabla':TABLA}
            
            if mtype == 'double':
                doub = doubles.get(id=data['move'])
                version = doub.get_my_version()
                triples = doub.get_my_triples()
                vars['name'] = doub.__str__()
                vars['dbase'] = doub.id
                vars['triples'] = triples
                color = doub.colors
            elif mtype == 'triple':
                triples = TripleComparation.objects.filter(doubleId_id=data['move'])
                triple = triples.get(id=data['Tmove'])
                version = triple.get_my_version()
                vars['name'] = triple.__str__()
                vars['dbase'] = int(data['move'])
                vars['tbase'] = triple.id
                vars['triples'] = triples
                color = triple.colors
            else:
                color = move.colors
                version = move.get_my_version()

            vars['load_table'] = MovesFactory.load_table(color)
            vars['versions'] = version
            return vars  
        except Exception as e:
            print("Error al cargar datos 2",e,data)
            return {'tabla':TABLA}

    @staticmethod
    def load_table(data):
        "USAR ESTA VERSION DE LOAD_TABLE"
        if data:
            if data == 'DEFAULT':
                return ''
            else:
                filas = data.split('.')
                total = []
                for x in range(13):
                    select = filas[x]
                    if select:
                        columna = select.split('-')
                        columnas = []
                        for a in range(13):
                            selected = columna[a]
                            if selected:
                                name = TABLA[x][a]
                                color = int(selected)
                                columnas.append([name,color])
                        total.append(columnas)
                return total
                        
    @staticmethod
    def format_table(asign):
        if asign:
            color = asign.versionId.colors
            if color == 'DEFAULT':
                return ''
            else:
                filas = color.split('.')
                total = []
                for x in filas:
                    if x:
                        columna = x.split('-')
                        columnas = []
                        for a in columna:
                            name = a.split('|')[0]
                            color = int(a.split('|')[1])
                            columnas.append([name,color,COLORS[color]])
                        total.append(columnas)
                return total
        else:
            return ''


    @staticmethod
    def set():
        pass

    @staticmethod
    def create_base():
        for data in SINGLE:
            celdas = ''
            for a in data['cell']:
                index = 0
                for b in a:
                    if index <12:
                        celdas+= str(b)+'-'
                        index+=1
                    else:
                        celdas+= str(b)+'.'
            try:
                Move.objects.create(id=data['id'],moveName=data['title'],colors=celdas)
            except Exception as e:
                print("Error al cargar data",e)

    @staticmethod
    def create_double():
        for data in DOUBLES:
            for doubles in data['comps']:
                celdas = ''
                cells = doubles['cell']
                if cells =='DEFAULT':
                    celdas = cells
                else:
                    for cell in cells:
                        index = 0
                        for b in cell:
                            if index <12:
                                celdas+= str(b)+'-'
                                index+=1
                            else:
                                celdas+= str(b)+'.'
                try:
                    #moveId nameComparation colors
                    DoubleComparation.objects.create(id=doubles['id'],moveId_id=data['base'],nameComparation=doubles['title'],colors=celdas)
                except Exception as e:
                    print("Error al cargar data",e)

    @staticmethod
    def create_triple():
        for data in TRIPLES:
            for doubles in data['comps']:
                celdas = ''
                cells = doubles['cell']
                if cells =='DEFAULT':
                    celdas = cells
                else:
                    for cell in cells:
                        index = 0
                        for b in cell:
                            if index <12:
                                celdas+= str(b)+'-'
                                index+=1
                            else:
                                celdas+= str(b)+'.'
                    try:
                        #doubleId nameComparation colors
                        TripleComparation.objects.create(id=doubles['id'],doubleId_id=data['base'],nameComparation=doubles['title'],colors=celdas)
                    except Exception as e:
                        print("Error al cargar data",e)

    @staticmethod
    def save_colors(data):
        option = {'single':Move,'double':DoubleComparation,'triple':TripleComparation}
        to_save = option[data['type']].objects.get(id=data['id'])
        to_save.colors = data['texto']
        to_save.save()
    
    @staticmethod
    def delete_colors(data):
        option = {'single':Move,'double':DoubleComparation,'triple':TripleComparation}
        to_save = option[data['type']].objects.get(id=data['id'])
        to_save.colors = 'DEFAULT'
        to_save.save()



#REMOVER
class ComparativeHeader(models.Model):
    nameComparative = models.CharField(max_length=200,blank=False,null=False,default='DF_Comparative')
    def __str__(self):
        return self.nameComparative

class ComparativeADD(models.Model):
    HeaderID = models.ForeignKey(ComparativeHeader,default=False,null=False,on_delete=models.CASCADE)
    moveId = models.ForeignKey(Move,default=False,blank=False,on_delete=models.CASCADE)
    def __str__(self):
        return "%s de comparativa %s "%(self.moveId.moveName,self.HeaderID)

