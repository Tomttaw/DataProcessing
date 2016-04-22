# -*- coding: utf-8 -*-
"""
Created on Wed Apr 20 12:11:53 2016

@author: Tomttaw
"""

import json
import csv

csvfile = open('income_equality.csv', 'r')
jsonfile = open('income_equality.json', 'w')

fieldnames = ("Country", "Gini_index")
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write("\n")