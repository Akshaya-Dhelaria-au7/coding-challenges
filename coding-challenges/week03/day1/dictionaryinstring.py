#Assigning the value to the string
string="w3resource"
dictionary={}
#In every loop, each letter is tested
for letter in string:
    dictionary[letter] = dictionary.get(letter, 0)+1

print(dictionary)
