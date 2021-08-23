1. Import DB
2. Eksekusi query berikut :
  INSERT INTO roles VALUES (1, 'user', NOW(), NOW());
  INSERT INTO roles VALUES (2, 'moderator', NOW(), NOW());
  INSERT INTO roles VALUES (3, 'admin', NOW(), NOW());

3.Untuk routesnya :
  3.1 Register (POST)
    URL : http://localhost:3000/api/auth/signup

    REQUEST_BODY :
    {
        "username" : "username",
        "email" : "email@gmail.com",
        "password" : "password",
        "nama_lengkap": "Nama Lengkap",
        "alamat": "Alamat Lengkap",
        "jenis_kelamin": "Male / Female",
        "foto_profil": "foto_profil.jpeg",
        "roles" : ["moderator",admin", "user"]
    }

    3.2 Login (POST)
    URL : http://localhost:3000/api/auth/signin

    REQUEST_BODY :
    {
        "email" : "email@gmail.com",
        "password" : "password"
    }

    RESPONSE_BODY :
    {
        "id": "id",
        "username": "username",
        "email": "email@gmail.com",
        "nama_lengkap": "Nama Lengkap",
        "alamat": "Alamat Lengkap",
        "jenis_kelamin": "Male / Female",
        "foto_profil": "foto_profil.jpeg",
        "roles": [
            "ROLE_MODERATOR",
            "ROLE_USER",
            "ROLE_ADMIN"
        ],
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI5NzMwNDA3LCJleHAiOjE2Mjk4MTY4MDd9.MzpALRrMDTNRSiCm3P46kcJQQhj9BdsS6qOzw-6H_1Y"
    }


NB : 
# Roles :
  1. moderator = administrator
  2. admin = penulis
  3. user = pembaca
# Jenis Kelamin :
  1. Male / Laki-laki
  2. Female / Perempuan
