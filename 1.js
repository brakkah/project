var biodata = {
    name: "Muhammad Brakkah Hidayad", //string
    age: 23, //number
    address: "Jl. Slamet Riyadi No.17 Rt.18 Kota Jambi", //string
    hobbies: ['Basket', 'Catur', 'Bola Kaki'], //array
    is_married: false, //boolean
    list_school: [{
        Elementary: "SDN 26 Kota Jambi",
        year_in: 2002,
        year_out: 2008
    },{
       junior_high_school: "SMP Adhyaksa 1 Kota Jambi",
       year_in: 2008,
       year_out: 2011
    },{
        senior_high_school: "SMKN 1 Kota Jambi",
        year_in: 2011,
        year_out: 2014
    }],
    skills: [{
        skill_name: "Javascript",
        level: "beginner"
    },{
        skill_name: "Service Software and Hardware Handphone",
        level: "advanced"
    }],
    interest_in_coding: true
};

console.log(JSON.stringify(biodata));
