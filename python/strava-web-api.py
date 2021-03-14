import requests
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
import pandas as pd
import datetime as dt
import seaborn as sns

auth_url = "https://www.strava.com/oauth/token"
activites_url = "https://www.strava.com/api/v3/athlete/activities"

payload = {
    'client_id': "56934",
    'client_secret': '44c148263feb4f7855dd419f2af58b73df08efd0',
    'refresh_token': 'ac7791e211ecbd381f5740eb738b095351260ecf',
    'grant_type': "refresh_token",
    'f': 'json'
}

print("Requesting Token...\n")
res = requests.post(auth_url, data=payload, verify=False)
access_token = res.json()['access_token']
print("Access Token = {}\n".format(access_token))

header = {'Authorization': 'Bearer ' + access_token}
param = {'per_page': 200, 'page': 1}
my_dataset = requests.get(activites_url, headers=header, params=param).json()

print(my_dataset[0]["name"])
print(my_dataset[0]["map"]["summary_polyline"])

activities = pd.json_normalize(my_dataset)

#converting timestamp columns into datetimes
activities['start_date_local'] = pd.to_datetime(activities['start_date_local'])
#creating columns: start_time and start_date_local to be timestamps and dates only 
activities['start_time'] = activities['start_date_local'].dt.time 
activities['start_date_local'] = activities['start_date_local'].dt.date 

activities.to_csv('StravaData.csv')