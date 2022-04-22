def appendVersions(colors,data,profile):
    total = colors+'|'
    for x in data:
        asigned = str(x.detect_asignation(int(profile)))
        total += x.versionname+':'+str(x.id)+':'+asigned+'-'
    return total