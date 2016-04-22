# -*- coding: utf-8 -*-
"""
Created on Wed Apr 20 12:11:53 2016

@author: Tomttaw
"""

import json
import csv

csvfile = open('europa_gini.csv', 'r')
jsonfile = open('income_equality.json', 'w')

fieldnames = ("Country_code", "gini_index")
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write("\n")

csvfile.close()
jsonfile.close()    