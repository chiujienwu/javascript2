const RosterComponent = Vue.component('Roster', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            dialog: null,
            drawer: null,
            team: [
                new Player('Jerry', 9, 'L', 'L'),
                new Player('Isaac', 19, 'R', 'R'),
                new Player('Noah', 29, 'L', 'L'),
                new Player('Olivia', 39, 'R', 'L'),
                new Player('Elliot', 49, 'L', 'R'),
            ],

            newPlayer: {
                name: '',
                jerseyNumber: '',
                bats: 'R',
                throws: 'R',
            }
        }
    },

    // values/bindings passed to this component
    props: {

    },

    // functions that you want to use in your view that are triggered manually
    methods: {
        removePlayer: function(player){
            this.team.splice(this.team.indexOf(player),1);
        },
        addPlayer: function () {
            this.dialog = true;
        },

        savePlayer: function () {
            this.team.push(new Player(this.newPlayer.name,this.newPlayer.jerseyNumber, this.newPlayer.bats, this.newPlayer.throws));
            this.dialog = false;
        }

    },

    // props/data that needs to be calculated when dependencies change
    computed: {

    },

    // the view
    template: `
<div data-app="true">
        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-item @click="">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="addPlayer">
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Add Player</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="indigo"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container fluid fill-height >
                
                    
                        <v-row>
                            <Roster-Card v-for="apples in team" :player="apples" @remove-player="removePlayer"></Roster-Card>
                        </v-row>
                        
                        <v-dialog v-model="dialog" persistent max-width="600px">
                            <v-card>
                              <v-card-title>
                                <span class="headline">Player</span>
                              </v-card-title>
                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col cols="6">
                                      <v-text-field label="Player Name" v-model="newPlayer.name"></v-text-field>
                                    </v-col>
                    
                                    <v-col cols="6">
                                      <v-text-field label="Jersey Number" v-model="newPlayer.jerseyNumber"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                      <v-text-field label="Bats" v-model="newPlayer.bats"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                      <v-text-field label="Throws" v-model="newPlayer.throws"></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                <v-btn color="blue darken-1" text @click="savePlayer">Save</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                    
                
            </v-container>
        </v-content>
        <v-footer
                color="indigo"
                app
        >
            <span class="white--text">&copy; 2020</span>
        </v-footer>
    </div>`,
});

const RosterCardComponent = Vue.component('RosterCard', {
    props: {
        player: {
            type: Object,
        }
    },

    methods: {
      removePlayer(){
          // use kabob case for HTML argument name which is emitted to parent
          this.$emit('remove-player', this.player)
      }
    },

    template: `
    <div>
        <v-card class="mx-auto" max-width="344" min-width="200" outlined>
          <Player :player="player" class="card-body"></Player>
                <v-card-actions>
              <v-btn class="mx-2" fab dark small color="pink" @click="removePlayer">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
                </v-card-actions>
        </v-card>
    </div>
    `,

})




const PlayerComponent = Vue.component('Player',{
    props: {
        player: {
            type: Object
        }
    },

    template: `
        <div class="player">
            <v-card-title>{{player.name}}</v-card-title>
                <v-card-text>
                  Jersey Number : {{player.number}} <br/>
                  Bats:  {{player.bats}} <br/>
                  Throws: {{player.throws}}
            </v-card-text>
        </div>
    `

});
