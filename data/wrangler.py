'''
1. Fetch actors
2. Parse their biography
3. Fetch their picture (change size?)
4. Insert into the smaller sqlite db

Data model:
- name (from db)
- id (from db)
- party (from db AktørAktør relation, typeid=4)
- other relations (from db AktørAktør')
- født + alder + death (from member born - died)
- gender (from member)
- education (from member)
- email (from member)
- phone (from member)
- short bio (from member)


'''

import sqlite3
import xml.etree.ElementTree as ET

class Aktør:
    def __init__(self, data):
        print(data)
        self.id = data[0]
        self.name = data[3]
        self.party = "tbi"
        self.gender = "tbi"
        self.dateofbirth = "tbi"
        self.dateofdeath = "tbi"
        self.education = "tbi"
        self.email = "tbi"
        self.bio = "tbi"

        xml = r[6]
        bio = ET.fromstring(xml)

src = sqlite3.connect("oda.api.sqlite.db")
src_cursor = src.cursor()

q = "SELECT * FROM Aktør WHERE typeid=5 LIMIT 1;"
src_cursor.execute(q)
r = src_cursor.fetchone()

Aktør(r)





print(bio.find("pictureMiRes").text)
