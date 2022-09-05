        pmm: function (target, room, user) {
        if (!room instanceof Users.User || !user.isDeveloper()) return;
        const gitpmm = target.split(",")
        if (gitpmm.length = 2) {
        const gitpoke1 = gitpmm[0]
        const gitpoke2 = gitpmm[1]
        if (fullpokes.includes(gitpoke1)) {
        const gitnum1 = fullpokes.indexOf(gitpoke1) + 1
        } else {
        if (fullpokes2.includes(gitpoke1)) {
        const gitnum1 = fullpokes2.indexOf(gitpoke1) + 870
        } else {
        return this.say("Invalid.")
        }
        }
        if (fullpokes.includes(gitpoke2)) {
        const gitnum2 = fullpokes.indexOf(gitpoke2) + 1
        } else {
        if (fullpokes2.includes(gitpoke2)) {
        const gitnum2 = fullpokes.indexOf(gitpoke2) + 870
         } else {
         return this.say("Invalid.")
         }
        }
        
          } else {
        return this.say("Invalid.")
          }
         let finalnumber = gitnum1 * gitnum2 - 1
         if (finalnumber < 870) {
         let finalpokemon = fullpokes[finalnumber]
         return this.say(finalpokemon)
         } else {
         finalnumber = finalnumber + 869
         let finalpokemon = fullpokes[finalnumber]
         return this.say(finalpokemon)
         }
         },
