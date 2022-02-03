import mysql.connector # pip3 install mysql-connector-python
from mysql.connector import errorcode
import os # removes file extension
from dotenv import load_dotenv # pip3 install python-dotenv
import csv

load_dotenv()

mydb = mysql.connector.connect(
	host=os.environ.get('MYSQL_HOST'),
	user=os.environ.get('MYSQL_USER'),
	password=os.environ.get('MYSQL_PASS'),
	database=os.environ.get('MYSQL_DBNAME')
)

mycursor = mydb.cursor()

with open('data/GeoLite2-City-Blocks-IPv4-Hex.csv', newline='') as csvfile:
    val = list(csv.reader(csvfile, delimiter=' ', quotechar='|'))
    # for row in val[0:5]:
    #     print(', '.join(row))

    # sql = "INSERT INTO geoip2_network (network_start, network_end, latitude, longitude) VALUES (%s, %s, %s, %s)"
    # mycursor.executemany(sql, val)