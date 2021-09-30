class Cannon{
    constructor(x,y,w,h,angle){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.angle=angle
        this.cannonimg1  = loadImage("assets/cannonBase.png")
        this.cannonimg2  = loadImage("assets/canon.png")
    }
    display(){
       push()
       imageMode(CENTER)
       image(this.cannonimg2,this.x,this.y,this.w,this.h)
       pop()
       image(this.cannonimg1,70,20,200,200)


    }
}