import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoomService {

  private hp = 100;

  private doomguy: string;

  private healthHud: string;

  private armorHud: string;

  selection: number;

  // Sounds

  death = new Audio('../assets/sounds/dspldeth.wav');

  pain = new Audio('../assets/sounds/dsplpain.wav');

  fire = new Audio('../assets/sounds/dspistol.wav');

  hyperlink = new Audio('../assets/sounds/dsdoropn.wav');

  show = new Audio('../../../assets/sounds/dsposit1.wav');

  move = new Audio('../assets/sounds/dspstop.wav');

  try = new Audio('../assets/sounds/dsoof.wav');

  back = new Audio('../assets/sounds/dsswtchn.wav');

  track = new Audio();

  // **Sounds**

  constructor(private route: Router) {

    this.selection = 0;

  // HUD methods

    this.doomguy = '../assets/images/doomguy/doomguy-100-front.png';

    if (this.hp > 80) {

      setInterval( () => {

        const look = Math.random() * 100;

        const doomguyElement = document.getElementById('doomguy').setAttribute('src' , this.doomguy);

        if (this.hp <= 0) {

         return clearInterval(1);

        }

        this.doomguy = '../assets/images/doomguy/doomguy-';

        if (this.hp >= 80) {

              if (look < 33) {

                  this.doomguy += '100-front.png';
              }
              if (look < 66 && look > 33) {

                  this.doomguy += '100-left.png';
              }
              if (look > 66) {

                  this.doomguy += '100-right.png';
              }
          }

        if (this.hp < 80 && this.hp >= 60) {

            if (look < 33) {

              this.doomguy += '80-front.png';
          }
            if (look < 66 && look > 33) {

              this.doomguy += '80-left.png';
          }
            if (look > 66) {

              this.doomguy += '80-right.png';
          }

        }
        if (this.hp < 60 && this.hp >= 40) {

            if (look < 33) {

              this.doomguy += '60-front.png';
          }
            if (look < 66 && look > 33) {

              this.doomguy += '60-left.png';
          }
            if (look > 66) {

              this.doomguy += '60-right.png';
          }

        }
        if (this.hp < 40 && this.hp >= 20) {

            if (look < 33) {

              this.doomguy += '40-front.png';
          }
            if (look < 66 && look > 33) {

              this.doomguy += '40-left.png';
          }
            if (look > 66) {

              this.doomguy += '40-right.png';
          }

        }
        if (this.hp < 20 && this.hp >= -10000) {

            if (look < 33) {

              this.doomguy += '20-front.png';
          }
            if (look < 66 && look > 33) {

              this.doomguy += '20-left.png';
          }
            if (look > 66) {

              this.doomguy += '20-right.png';
          }

        }

        return doomguyElement;

      }, 1000);
  }
   }

   takeDamageService() {

    if (this.hp <= 0) {
      return;
    }

    this.hp -= 13;

    this.healthHud = `../assets/images/hud/health-${this.hp}.png`;

    this.armorHud = `../assets/images/hud/armor-${this.hp}.png`;

    const doomguyTakingDamage = document.getElementById('doomguy').setAttribute('src' , this.doomguy);

    const health = document.getElementById('health').setAttribute('src' , this.healthHud);

    const armor = document.getElementById('armor').setAttribute('src' , this.armorHud);

    const lookDirection = Math.random() * 100;

    this.doomguy = '../assets/images/doomguy/doomguy-';

    if (this.hp >= 80) {

      if (lookDirection >= 50) {

        this.doomguy += '100-look-right.png';

      } else {

        this.doomguy += '100-look-left.png';

      }

    }
    if (this.hp >= 60 && this.hp < 80) {

      if (lookDirection >= 50) {

        this.doomguy += '80-look-right.png';

      } else {

        this.doomguy += '80-look-left.png';

      }

    }
    if (this.hp >= 40 && this.hp < 60) {

      if (lookDirection >= 50) {

        this.doomguy += '60-look-right.png';

      } else {

        this.doomguy += '60-look-left.png';

      }

    }
    if (this.hp >= 20 && this.hp < 40) {

      if (lookDirection >= 50) {

        this.doomguy += '40-look-right.png';

      } else {

        this.doomguy += '40-look-left.png';

      }

    }
    if (this.hp > 0 && this.hp < 20) {

      if (lookDirection >= 50) {

        this.doomguy += '20-look-right.png';

      } else {

        this.doomguy += '20-look-left.png';

      }

    }

    if (this.hp <= 0) {

      this.doomguy += 'dead.png';

      return this.death.play();
    }

    this.pain.load();
    this.pain.play();

    return [doomguyTakingDamage , health , armor];

   }

  // **HUD methods**

   // Navigation


  navigation(keyboard , maxSelection: number) {

    if (keyboard.key === 'ArrowUp' && this.selection === 0) {

    this.move.load();
    this.move.play();

    return this.selection = maxSelection;
    }

    if (keyboard.key === 'ArrowDown' && this.selection === maxSelection) {

    this.move.load();
    this.move.play();

    return this.selection = 0;
    }

    if (keyboard.key === 'ArrowUp' && this.selection !== 0) {

    this.move.load();
    this.move.play();

    return this.selection -- ;
    }

    if (keyboard.key === 'ArrowDown' && this.selection !== maxSelection) {

    this.move.load();
    this.move.play();

    return this.selection ++ ;
    }

    if (keyboard.key === 'Enter') {

      if (document.location.pathname === '/menu') {

      this.fire.load();
      this.fire.play();

      switch (this.selection) {

        case 0:

        this.route.navigateByUrl('about-me');
        break;

        case 1:

        this.route.navigateByUrl('projects');
        break;
        case 2:

        this.route.navigateByUrl('contact');
        break;
        case 3:

        this.route.navigateByUrl('music');
        break;
      }
     }

      if (document.location.pathname === '/about-me') {
       switch (this.selection) {

         case 5:

         this.hyperlink.play();

         window.open('https://www.efset.org/cert/GsPYh7' , '_blank');

         break;

         case 7:

         this.hyperlink.play();

         window.open('../../../assets/CV_Eric Corral_Front_End.pdf' , '_blank');

         break;

         case 8:

         this.back.play();

         this.route.navigateByUrl('/menu');

         break;

         default:

         this.try.load();
         this.try.play();

         break;
       }
     }

      if (document.location.pathname === '/projects') {

        const url = 'https://ericrcorral.github.io/';

        if (this.selection === 11) {

          this.back.play();

        } else {

          this.hyperlink.play();
        }

        switch (this.selection) {

        case 0:

        window.open('https://todolistmaps-d435d.web.app/signIn' , '_blank');

        break;
        case 1:

        window.open(url + 'TMovieDB-App' , '_blank');

        break;
        case 2:

        window.open(url + 'ImagenesFirebase' , '_blank');

        break;
        case 3:

        window.open(url + 'ListaTareasApp' , '_blank');

        break;
        case 4:

        window.open(url + 'Firechat' , '_blank');

        break;
        case 5:

        window.open(url + 'AuthMaps' , '_blank');

        break;
        case 6:

        window.open(url + 'Heartstone-Cards' , '_blank');

        break;
        case 7:

        window.open(url + 'SPA' , '_blank');

        break;
        case 8:

        window.open(url + 'Ford-Ka-Replica/' , '_blank');

        break;
        case 9:

        window.open(url + 'Gourmetaurant/' , '_blank');

        break;
        case 10:

        window.open(url + 'CryOfFear' , '_blank');

        break;
        case 11:

        this.route.navigateByUrl('/menu');

        break;

      }
     }

      if (document.location.pathname === '/contact') {

        if (this.selection === 4) {

          this.back.play();

        } else {

          this.hyperlink.play();
        }

        switch (this.selection) {

        case 0:

        window.open('https://github.com/EricRCorral?tab=repositories' , '_blank');

        break;
        case 1:

          window.open('https://www.linkedin.com/in/eric-corral-906364192/' , '_blank');

          break;
        case 2:

          window.open('mailto:eric-wil@hotmail.com' , '_blank');

          break;
        case 3:

          window.open('tel:+5401130131603');

          break;
        case 4:

          this.route.navigateByUrl('/menu');

          break;
      }

     }

      if (document.location.pathname === '/music') {

      if (this.selection === 15) {

        this.back.play();

        this.route.navigateByUrl('/menu');

      }

      else {

        this.track.src = `../assets/sounds/music/track-${this.selection}.mp3`;

        this.track.load();

        this.track.play();

      }

     }
    }
 }

// **Navigation**
}
