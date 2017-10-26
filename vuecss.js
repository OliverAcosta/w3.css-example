
var data = {
    progressBarData:0
};
    Vue.component('progress-bar', {
        template:`
        <div class="w3-border">
        <div v-bind:style="sstyle" v-bind:class="classes">{{percent}}</div>
        </div>`,
        data: function()
        {
        
        sstyle = {
                height : "24px",
                width  : data.progressBarData + "%"
        };
        return {
            sstyle:sstyle,
            classes : "w3-green",
            percent : data.progressBarData 
        }
        }

    });


data.progressBarData  = 22;
new Vue({
     el:"#bar1"
     
});

new Vue({
    el:"#bar2"
    
});
