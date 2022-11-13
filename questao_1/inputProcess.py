class InputProcess:
    def __init__(self, nameFile, robot):
        self.nameFile = nameFile
        self.robot = robot

        self.heightLimit = 0
        self.widthLimit = 0
        self.commandRobot = []

    def inputData(self):
        file = open(self.nameFile,"r")

        #inicio
        size = file.readline().split("\n")[0].split(" ")
        self.heightLimit = size[0]
        self.widthLimit = size[1]	

        #comandos do robo
        self.commandRobot = file.readlines()

    def processData(self):
        #leitura do arquivo
        self.inputData()

        #verifica se existem comandos
        if(len(self.commandRobot) == 0):
            return

        #loops de leitura dos comandos
        for element in self.commandRobot:
                #verificacao de novos casos de teste no mesmo arquivo
                if(element[0].isdigit()):          
                    #exibicao do dado
                    self.robot.printRobot()

                    size = element.split("\n")[0].split(" ")
                    self.heightLimit = size[0]
                    self.widthLimit = size[1]

                    #reset dos dados
                    self.robot.setPosition(0, 0)
                    self.robot.resetRotation()
                
                #execucao dos comandos
                else:
                    element = list(element.split("\n")[0])
                
                    for orientation in element:
                        self.robot.move(int(self.widthLimit), int(self.heightLimit), orientation)
        
        #exibicao do dado
        self.robot.printRobot()
        
