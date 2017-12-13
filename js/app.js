angular
.module('app',[])
.component('simplePrinceComponent', {
    templateUrl: '../templates/simplePrince.template.html',

    controller: function() {
        this.pageContent = [{
            header: "What’s in This Unit?",
            text: "Earth’s climate is changing, with average temperatures increasing by about 0.8℃ since 1880. While the increase may sound small, the result changes is that ice on Earth is vanishing. Students adopt the role of climatologists who help the fictional World Climate Institute research with the goal of educating the public about their findings. In order to delve into the mechanism of climate change, students investigate with models, and science texts. They refute claims based on common misconceptions—an increase in solar energy or direct heating from human Students learn how energy from the sun interacts with Earth's atmosphere and surface."
        }, {
            header: "Why?",
            text: "Climate change represents one of the most critical realities for our planet and the organisms that inhabit it. Earth’s Changing Climate provide investigate claims about why Earth’s temperature is increasing. Though global warming is a well-established phenomenon in the scientific scientists who doubt that Earth is warming, or if it is, that it matters. As such, having the opportunity to figure out what is known and how for all citizens of the planet. In this unit, students have the opportunity to investigate and refute common alternative and inaccurate claims themselves. We chose to lead the unit with an actual observable phenomenon—the melting of Earth’s ice."
        }, {
            header: "How?",
            text: "In Chapter 1, students are introduced to their role as student climatologists and begin their investigation of what can cause global temperature explore the Earth's Changing Climate Simulation, test effects of changes to the atmosphere, and examine data about the atmosphere. The dioxide and methane correlate with increases in energy absorbed by the surface and increases in temperature. In Chapter 2, students focus and exiting the Earth system. They read about climate change in Earth's history, run tests in the Simulation, and use a simple physical model."
        }];
    }
});
