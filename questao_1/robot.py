class Robot:
    def __init__(self, x,y):
        self.widthPosition = x
        self.heightPosition = y
        self.rotation = 0

    def getPosition(self):
        return (str(self.widthPosition) +" "+ str(self.heightPosition))

    def setPosition(self, x, y):
        self.widthPosition = x
        self.heightPosition = y

    def getRotation(self):
        if (self.rotation == 0):
            return 'N'
        elif (self.rotation == 180):
            return 'S'
        elif(self.rotation == 90):
            return 'L'
        elif(self.rotation == 270):
            return 'O'

    def setRotation(self, degrees):
        self.rotation += degrees

        if(self.rotation >= 360):
            self.rotation -= 360
        elif (self.rotation < 0):
            self.rotation = 360 - (self.rotation * -1)

    def resetRotation(self):
        self.rotation = 0
    

    def move(self, areaWidth, areaHeight, orientation):
        if(orientation == 'F'):
            self.movement(0, 90, 270, 180, areaWidth, areaHeight)
        elif(orientation == 'T'):
            self.movement(180, 270, 90, 0, areaWidth, areaHeight)
        elif(orientation == 'E'):
            self.setRotation(-90)
        elif(orientation == 'D'):
            self.setRotation(90)

  #refatorar
    def movement(self, rot0, rot1, rot2, rot3, areaWidth, areaHeight):
        if(self.rotation == rot0):
            #regras
            if(self.heightPosition + 1 < areaHeight):
                self.setPosition(self.widthPosition, self.heightPosition + 1)

        #olhando para leste
        elif(self.rotation == rot1):
            #regras
            if(self.widthPosition + 1 < areaWidth):
                self.setPosition(self.widthPosition + 1, self.heightPosition)

        #olhando para o oeste
        elif(self.rotation == rot2):
            #regras
            if(self.widthPosition - 1 >= 0):
                self.setPosition(self.widthPosition - 1, self.heightPosition)
        
        #olhando para o sul
        elif(self.rotation == rot3):
            #regras
            if(self.heightPosition - 1 >= 0):
                self.setPosition(self.widthPosition, self.heightPosition - 1)

    def printRobot(self):
        print(self.getRotation() + " " + self.getPosition())
    