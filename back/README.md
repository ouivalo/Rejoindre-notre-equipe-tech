# Nous rejoindre - back

Une fois le repos cloné :

Créer l'image :
-  `docker-compose build` 

Lancer le container :
-  `docker-compose up -d`

Faire les migrations de l'app utilisateur **en premier** :
-  `docker-compose exec web python manage.py makemigrations utilisateur`

Puis :
-  `docker-compose exec web python manage.py migrate utilisateur`

Lancer les migrations des autres applications :
-  `docker-compose exec web python manage.py makemigrations alerte certification compte document examens location messagerie reglement stage webinaire`

 Puis :
-  `docker-compose exec web python manage.py migrate` pour finir de migrer toutes les tables.


Pour créer un utilisateur admin : 
-  `docker-compose exec web python manage.py createsuperuser`

Pour remplir la BDD avec des exemples :
- `docker-compose exec web python manage.py loaddata db.json`

Pour exporter des données d'une app dans ce json :
- `docker-compose exec web python manage.py dumpdata nom_app > db.json`
