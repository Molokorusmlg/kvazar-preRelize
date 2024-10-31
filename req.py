import requests


r = requests.post("http://127.0.0.1:8000/api/users/auth/token/login/",data = {
    "phone": "+79867119714",
    "password": "lolololol",
})
print(r.json())

