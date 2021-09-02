contacts = []
#{'name':'string', 'surname':'string', 'phone':'string', 'mail':'string'}


print(f"Menu:\n \t 1. View all contacts \n \t 2. Search \n \t 3. New contact \n \t 4. Exit\n")

while True:
    zapros = int(input(">"))
    if zapros == 4:#выход
        exit(0)
        
    if zapros == 1:#вывести всех
        for i in range(len(contacts)):
            print(f"Contact #{contacts[i]['id']}")
            print(f"\tName: {contacts[i]['name']}")
            print(f"\tSurname: {contacts[i]['surname']}")
            print(f"\tPhone: {contacts[i]['phone']}")
            print(f"\tE-mail: {contacts[i]['mail']}")
            
    if zapros == 3:#создать новый
        print("New contact\n")
        newcontact = {"id":len(contacts)}
        newcontact["name"] = input(f"\tName:")
        newcontact["surname"] = input(f"\tSurname:")
        newcontact["phone"] = input(f"\tPhone:")
        newcontact["mail"] = input(f"\tE-mail:")
        contacts.append(newcontact)
    
    if zapros == 2:#поиск 
        print("Search by\n")
        print(f"\t 1. Name \n\t 2. Surname \n\t 3. Name and Surname \n\t 4. Phone \n\t 5. Name")
        filtr = int(input(f">"))
        request = input(f">Request: ")
        # а дописывать надо
        # ладно
