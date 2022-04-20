def appendVersions(colors,data):
    total = colors+'|'
    for x in data:
        total += x.versionname+':'+str(x.id)+'-'
    return total