from django.db import models
from poker.utils import COLORS,TABLA
from .basemoves import SINGLE,DOUBLES,TRIPLES, get_table, get_tags
# Create your models here.

class Move(models.Model):
    moveName = models.CharField(max_length=200,blank=False,null=False,default='DF_Move')
    colors = models.CharField(max_length=1010,null=False,blank=False,default='DEFAULT')
    tags = models.CharField(max_length=200,null=False,blank=False,default='DEFAULT')
    observation = models.CharField(max_length=500,null=False,blank=False,default='DEFAULT')

    def __str__(self):
        return self.moveName

    def get_my_doubles(self):
        doubles_list = self.doublecomparation.all()
        return doubles_list
    
    def get_my_version(self):
        versions = self.singleversion.all()
        return versions

    def format_colors(self):
        total=[]
        columns = self.colors.split('.')[:-1]
        for colum in columns:
            filas = colum.split('-')
            total.append(filas)
        return total

    def data_dict(self):
        colors = self.format_colors()
        data = {'name':self.moveName,'colors':colors,'tags':self.tags,'obs':self.observation}
        return data 

class DoubleComparation(models.Model):
    moveId = models.ForeignKey(Move,related_name="%(class)s",null=False,blank=False,on_delete=models.CASCADE)
    nameComparation = models.CharField(max_length=200,null=False,blank=False,default='Comparation')
    colors = models.CharField(max_length=1010,null=False,blank=False,default='DEFAULT')
    tags = models.CharField(max_length=200,null=False,blank=False,default='DEFAULT')
    observation = models.CharField(max_length=500,null=False,blank=False,default='DEFAULT')

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
    tags = models.CharField(max_length=200,null=False,blank=False,default='DEFAULT')
    observation = models.CharField(max_length=500,null=False,blank=False,default='DEFAULT')
    
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
    def get_all_smoves_dict():
        moves_list = Move.objects.all()
        return moves_list


    @staticmethod
    def get_smove(moveId):
        try:
            move = Move.objects.get(id=moveId)  
            return move
        except Exception as e:
            return False

    @staticmethod
    def get_all_dmoves():
        moves_list = DoubleComparation.objects.all()
        return moves_list

    @staticmethod
    def get_dmove(moveId):
        try:
            move = DoubleComparation.objects.get(id=moveId)
            return move
        except Exception as e:
            return False
    
    @staticmethod
    def get_triples(id):
        moves_list = TripleComparation.objects.filter(doubleId_id=id)
        return moves_list
    
    @staticmethod
    def get_tmove(moveId):
        try:
            move = TripleComparation.objects.get(id=moveId)
            return move
        except Exception as e:
            return False
    
    @staticmethod
    def get_table(data):
        if data.get('tbase'):
            selected = TripleComparation.objects.get(id=data['tbase'])
        elif data.get('dbase'):
            selected = DoubleComparation.objects.get(id=data['dbase'])
        elif data.get('base'):
            selected = Move.objects.get(id=data['base'])
        table = MovesFactory.load_table(selected.colors)
        print("cargandoTable",selected.colors)
        return {'cols':table,'coment':''}


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
                vars['tags'] = MovesFactory.load_tags(doub.tags)
                color = doub.colors
            elif mtype == 'triple':
                triples = TripleComparation.objects.filter(doubleId_id=data['move'])
                triple = triples.get(id=data['Tmove'])
                version = triple.get_my_version()
                vars['name'] = triple.__str__()
                vars['dbase'] = int(data['move'])
                vars['tbase'] = triple.id
                vars['triples'] = triples
                vars['tags'] = MovesFactory.load_tags(triple.tags)
                color = triple.colors
            else:
                color = move.colors
                version = move.get_my_version()
                vars['tags'] = MovesFactory.load_tags(move.tags)

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
    def load_tags(data):
        totaltags =[]
        if data:
            if data == 'DEFAULT':
                totaltags.append([0,'Default'])
            else:
                tags = data.split('¿')[:-1]
                for tag in tags:
                    totaltags.append(tag.split(';'))
        return totaltags
                        
    @staticmethod
    def format_table(asign):
        if asign:
            color = asign.versionId.colors
            if color == 'DEFAULT':
                return ''
            else:
                total = MovesFactory.load_table(color)
                return total
        else:
            return ''


    @staticmethod
    def set():
        pass

    @staticmethod
    def create_base():
        for data in SINGLE:
            celdas = get_table(data['cell'])
            tags = get_tags(data['tag'])
            try:
                Move.objects.create(id=data['id'],moveName=data['title'],colors=celdas,tags=tags)
            except Exception as e:
                print("Error al cargar data",e)

    @staticmethod
    def create_double():
        for data in DOUBLES:
            for doubles in data['comps']:
                celdas = get_table(doubles['cell'])
                tags = get_tags(doubles['tag'])
                try:
                    #moveId nameComparation colors
                    DoubleComparation.objects.create(id=doubles['id'],moveId_id=data['base'],nameComparation=doubles['title'],colors=celdas,tags=tags)
                except Exception as e:
                    print("Error al cargar data",e)

    @staticmethod
    def create_triple():
        for data in TRIPLES:
            for triples in data['comps']:
                celdas = get_table(triples['cell'])
                tags = get_tags(triples['tag'])
                try:
                    #doubleId nameComparation colors
                    TripleComparation.objects.create(id=triples['id'],doubleId_id=data['base'],nameComparation=triples['title'],colors=celdas,tags=tags)
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