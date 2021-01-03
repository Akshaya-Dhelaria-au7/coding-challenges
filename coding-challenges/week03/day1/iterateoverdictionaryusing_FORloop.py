'''Iterate through keys'''

statesandrivers={"UttarPradesh": "Yamuna", "Gujarat": "Sabarmati", "AndhraPradesh":"Krishna", "Karnataka":"Tungabhadra" }

print ("List of states:") 

for states in statesandrivers.keys():
  print (states)


''' Iterate through values'''

statesandrivers={"UttarPradesh": "Yamuna", "Gujarat": "Sabarmati", "AndhraPradesh":"Krishna", "Karnataka":"Tungabhadra" }

print ("List of rivers:")

for rivers in statesandrivers.values():
  print (rivers)

'''Iterate through both values and keys '''

statesandrivers={"UttarPradesh": "Yamuna", "Gujarat": "Sabarmati", "AndhraPradesh":"Krishna", "Karnataka":"Tungabhadra" }

print ("List of states and rivers:") 

for states,rivers in statesandrivers.items():
  print (states,"-",rivers)


