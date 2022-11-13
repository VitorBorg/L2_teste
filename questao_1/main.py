from robot import Robot
from inputProcess import InputProcess

def main():
  #criacao das instancias
  rob = Robot(0,0)
  fileCommands = InputProcess('input.txt', rob)

  #recebimento das entradas e loop dos comandos
  fileCommands.processData()

main()