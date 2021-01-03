#!/usr/bin/env python3

#To create new folder according to the extension given as input

import os
import sys

def files_managing_through_extension(folderpath,organise_folder):
    list_files=os.listdir(folderpath)
#It will check for each files in a folder
    for each_files in list_files:
        if os.path.isfile(folderpath+"/"+each_files):
            try:
                #Here, it will split the file into 2. For example:filename is "abc.py" , and after getting split it will be "abc",".py"
                taking_extensions_of_file=os.path.splitext(each_files)[-1]
                #If the file don't have any extension, it will create folder called "txt" and copy the files
                if taking_extensions_of_file == "":
                    taking_extensions_of_file = "txt"
                else:
                #Here, it will split again ".py" into "." , "py" and we will take "py" 
                    taking_extensions_of_file = taking_extensions_of_file.split('.')[1]
                #After taking "py", if the folder has py folder, we will copy the file or else make folder named as same as name of extension and copy the file
                if os.path.isdir(organise_folder+"/"+taking_extensions_of_file):
                    os.symlink(folderpath+"/"+each_files,organise_folder+"/"+taking_extensions_of_file+"/"+each_files)
                    continue
                else:
                    os.mkdir(organise_folder+"/"+taking_extensions_of_file)
                    os.symlink(folderpath+"/"+each_files,organise_folder+"/"+taking_extensions_of_file+"/"+each_files)

            #Handling the exception
            except FileExistsError:
                continue  
            # except FileNotFoundError:
            #     print("File not found")
        #Calling the function again(Recursion)
        elif os.path.isdir(folderpath+"/"+each_files):
            files_managing_through_extension(folderpath+"/"+each_files,organise_folder)

    return "Done Organising file through extension"

'''End of extension program'''


'''To check the size and arrange it '''

import os
import sys
#Sorting the file according to the size
def sort_file_on_size (filepath,organise_folder):
    list_of_directory=os.listdir(filepath)
#Check for each files and folders and take files.
    for each_file_and_folder in list_of_directory:
        if os.path.isfile(filepath+"/"+each_file_and_folder):
#Here it will calculate and give the size of the file in Bytes.
            size_of_file=os.stat(filepath+"/"+each_file_and_folder).st_size
            try:
#Here, if the file size is less than 1000 bytes, it will copy the file in Bytes folder and if it does not find the Bytes folder, it will make the folder and copy it
                if size_of_file<1000:
                    if os.path.isdir(organise_folder+"/"+"Bytes"):
                        os.symlink(filepath+"/"+each_file_and_folder,organise_folder+"/"+"Bytes"+"/"+each_file_and_folder)
                        continue
                    else:
                        os.mkdir(organise_folder+"/"+"Bytes")
                        os.symlink(filepath+"/"+each_file_and_folder,organise_folder+"/"+"Bytes"+"/"+each_file_and_folder)
#Here, it will check for KiloBytes and if any file found, it will copy it or else if the folder not found then it will make folder and copy the file               
                if size_of_file>=1000 and size_of_file<1000000:
                    if os.path.isdir(organise_folder+"/"+"KiloBytes"):
                        os.symlink(filepath+"/"+each_file_and_folder,organise_folder+"/"+"KiloBytes"+"/"+each_file_and_folder)
                        continue
                    else:
                        os.mkdir(organise_folder+"/"+"KiloBytes")
                        os.symlink(filepath+"/"+each_file_and_folder,organise_folder+"/"+"KiloBytes"+"/"+each_file_and_folder)
#Here, it will check for MegaByte and if any file found, it will copy it or else if the folder not found then it will make folder and copy the file
                if size_of_file>=1000000 and size_of_file<1000000000:
                    if os.path.isdir(organise_folder+"/"+"MegaByte"):
                        os.symlink(filepath+"/"+each_file_and_folder,organise_folder+"/"+"MegaByte"+"/"+each_file_and_folder)
                        continue
                    else:
                        os.mkdir(organise_folder+"/"+"MegaByte")
                        os.symlink(filepath+"/"+each_file_and_folder,organise_folder+"/"+"MegaByte"+"/"+each_file_and_folder)
#here, it will check for GigaByte and if any file found, it will copy it or else if the folder not found then it will make folder and copy the file            
                if size_of_file>=1000000000 and size_of_file<1000000000000:
                    if os.path.isdir(organise_folder+"/"+"GigaByte"):    
                        os.symlink(filepath+"/"+each_file_and_folder,organise_folder+"/"+"GigaByte"+"/"+each_file_and_folder)
                        continue
                    else:
                        os.mkdir(organise_folder+"/"+"GigaByte")
                        os.symlink(filepath+"/"+each_file_and_folder,organise_folder+"/"+"GigaByte"+"/"+each_file_and_folder)

#Here, I am handling the exception
                
            except FileExistsError:
                continue
        elif os.path.isdir(filepath+"/"+each_file_and_folder):
            sort_file_on_size(filepath+"/"+each_file_and_folder,organise_folder)    

    return "Done file organizing through size" 

filepath=""  #User Input
if len(sys.argv)==1 or sys.argv[1]=="--help" or len(sys.argv)==2:
    print("USAGE\n   -p <path>\n   path on which folder are to be organized\n   -o <0> OR <1> \n   0:To organize via size\n   1:To organize via extension\n   Default is by size")
    sys.exit(1)
organise="0"
#Here, it will ask for the path
if sys.argv[1]=="-p":
    filepath=sys.argv[2]
if len(sys.argv)>3 and sys.argv[3]=="-o":
    organise=sys.argv[4]
#The command below checks whether the path user entered is valid or not
path_exist=os.path.exists(filepath)
if not path_exist:
    print("Path Doesn't Exist,Hence did not run.Please provide valid path and run again.")
    sys.exit(1)
else:
#Here, I have given 0 for size and 1 for extension and if the user put 0, the file will get organised according to size and if user put 1, the file will get organised on the basis of extension.
    if organise=="0":
        organize_way="size"
    else:
        organize_way="extension"
    parent_folder=os.path.split(os.path.abspath(filepath))[0]
#Making a organised folder wherein all the files which were organised on the basis of size or extension will be copied into this parent folder.
    organise_folder=parent_folder+"/organise"
    print("Organising folder in path ",filepath,"with",organize_way,"and will be available in",organise_folder)
    try:
        os.mkdir(organise_folder)
    except FileExistsError:
        print("organise folder exists...")
    if(organise=="0"):
        print("Organising via size...")
        print(sort_file_on_size(filepath,organise_folder)) 
    else:
        print("Organising via extension...")
        print(files_managing_through_extension(filepath,organise_folder))

#Here, if user don't put 0 or 1, by default it will organise files according to size itself.
