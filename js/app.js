function startGame(){
			gamearea.start();
		}
		function movePlayer(event){
			if(!player.moving){
				moveInterval=setInterval(function(){player.move(event);}50);
				player.moving=true;
			}
		}
		function stopPlayer(event){
			clearInterval(moveInterval);
			player.moving=false;
		}

		var gamearea = {
			canvas:document.createElement("canvas"),
			start:function(){
				this.canvas.width=1100;
				this.canvas.height=600;
				this.canvas.style.backgroundColor="black";
				this.canvas.style.border="3px solid gray";
				this.canvas.style.display="block";
				this.canvas.style.margin="auto";
				document.body.insertBefore(this.canvas,document.body.childNodes[0]);
				this.context=this.canvas.getContext("2d");
				player.draw();
				window.addEventListener("keydown",movePlayer,event);
				window.addEventListener("keyup",stopPlayer,event);
			}
		}
		var player = {
			x:40, y:580, moving:false,
			draw:function(){
				gamearea.context.fillStyle="ivory";
				gamearea.context.fillRect(this.x+60,this.y,80,20);
				gamearea.context.fillRect(this.x+35, this.y-20,10,20);
			},
			update:function(d){
				this.x+=d;
			}
			move:function(ev){
				gamearea.context.clearRect(this.x,this.y,80,20);
				gamearea.context.clearRect(this.x+35, this.y-20,10,20);
				if(ev.keyCode==37 && this.x>0) this.update(-15);
				else if(ev.keyCode==39 && this+80<1100) this.update(15);
				this.draw();
			}
		}