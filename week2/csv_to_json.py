# -*- coding: utf-8 -*-
"""
Created on Wed Apr 20 12:11:53 2016

@author: Tomttaw
"""

import json
import csv

csvfile = open('regenval.csv', 'r')
jsonfile = open('regenval.json', 'w')

fieldnames = ("Date", "rain")
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(",\n")

csvfile.close()
jsonfile.close()    