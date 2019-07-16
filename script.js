function check() {
    console.log(university);
}

let university = {
    name: "karachi university",
    location: "university road",
    near: "NED university",
    isGovt: "yes",
    isPrivate: "yes",
    isRegular: "yes",
    feesAtMorning: 30000,
    feesAtEvening: 60000,
    totalDeparments: "770",
    headOffice: "main in front of KU",
    admissionOffice: "for admission of students",
    eventsOfKarachiUniversity:{
        funfair:"for enjoyment of students",
        eidParty:"to celebrate eid",
        artCouncils:"for students",

    },
    securityGuards:{
        totalSecurityGuards:30,
        work:"to secure peoples of university",
        salaryPakkage:11000,
        dutyHours:"12 hours",

    },
    bankOfKarachiUniversity:{
        totalPeoplesWorkInBank:10,
        salaryPakkage:30000,
        work:[
            "to submit fees of students", 
            "use for other personal work of KU"
        ],

        dutyHours:"8 hours",
    },
    photoCopyShopOfKarachiUniversity:{
        totalPeoplesWorkInPhotoCopyShop:2,
        work:[
            "to photoCopyShop notes of students",
            "to print voulchers",
            "to plastic coating of their notes",

        ]
    },
    
    fieldsInKarachiUniversity: [
        "arts",
        "computer science",
        "engineering",
        "commerce",
    ],
    deparmentsNameOfComputerScience: [
        "UBIT",
        "PHD",
        "BS",
        "BCSCourseOutline",
        "contact",
        "programs",
    ],
    deparmentsNameOfEngineering: [
        " chemicalEngineering",
        "electricalEngineering",
        "mechanicalEngineering",
        "petroleumtEchnilogy",
        "electricalEngineering",
        "BSC",
    ],
    deparmentsNameOfArts: [
        "BA",
        "BCOM",
        "BBA",

    ],
    deparmentsNameOfCommerce: [
        "ComputerizedAccounting",
        "InternationalBanking",
        " InternationalBusinessManagement",
        "MarketingManagement",
        "IslamicBanking",
        "FinancialAppraisal",
        "AccountingFunctionInBusiness ",
        " Banking",

    ],
    deparmentsNameOfMedical:[
        "pharmacy",
        "botany",
        "facultyOfManagementAdministrativeSciences",
        "Faculty of Science.",
    ],
    deparmentsNameOfChemistry:[
        "applied chemistry",
        "chemical engineering",
        "chemical department",
    ],
    
    totalStudentsInComputerScienceDeparment: [{
        UBIT: {
            totalStudents: 25,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 15,
            professorBioData: {
                name: "sir Abdul rehman",
                qualification: "software engineer",
                isStrick: "yes",
                age: 38,

            }
        },
        PHD: {
            totalStudents: 30,
            attendence: "70% attendence",
            progress: "better",
            femaleStudents: 17,
            maleStudents: 13,
            professorBioData: {
                name: "sir zahid ahmed",
                qualification: "software engineer",
                isStrick: "no",
                age: 60,

            }
        },
        BS: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir amir hussain",
                qualification: "software engineer",
                isStrick: "yes",
                age: 45,

            }
        },
        
        BCSCourseOutline: {
            totalStudents: 23,
            attendence: "90% attendence",
            progress: "good",
            femaleStudents: 13,
            maleStudents: 10,
            professorBioData: {
                name: "sir waheed zaki",
                qualification: "software engineer",
                isStrick: "yes",
                age: 44,

            }
        },
        contact: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "sir tauqeer fasi",
                qualification: "software engineer",
                isStrick: "no",
                age: 50,

            }
        },

        programs: {
            totalStudents: 18,
            attendence: " 50% attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir faizan tahir",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
    }
    ],
    totalStudentsInMedicalDeparment: [{
         pharmacy: {
            totalStudents: 25,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 15,
            professorBioData: {
                name: "miss amarah khan",
                qualification: "pharmacy ",
                isStrick: "yes",
                age: 38,

            }
        },
        facultyOfMedicine: {
            totalStudents: 30,
            attendence: "70% attendence",
            progress: "better",
            femaleStudents: 17,
            maleStudents: 13,
            professorBioData: {
                name: "miss zubaida javed",
                qualification: "qualified in medicine",
                isStrick: "no",
                age: 60,

            }
        },
        facultyOfScience: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "miss rabia  naz",
                qualification: "qualified in science",
                isStrick: "no",
                age: 35,

            }
        },
        FacultyOfManagementAdministrativeSciences: {
            totalStudents: 23,
            attendence: "90% attendence",
            progress: "good",
            femaleStudents: 13,
            maleStudents: 10,
            professorBioData: {
                name: "sir waheed zaki",
                qualification:" qualified in ManagementAdministrativeSciences ",
                isStrick: "yes",
                age: 44,

            }
        },
        botany: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "miss naziya rasheed",
                qualification: "qualified in botany",
                isStrick: "no",
                age: 50,

            }
        },

        programs: {
            totalStudents: 18,
            attendence: "full attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir faizan tahir",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
    }
    ],
    totalStudentsInEngineeringDeparment: [{
        chemicalengineering: {
            totalStudents: 25,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 15,
            professorBioData: {
                name: "sir Abdul rehman",
                qualification: "software engineer",
                isStrick: "yes",
                age: 38,

            }
        },
        electricalEngineering: {
            totalStudents: 30,
            attendence: "70% attendence",
            progress: "better",
            femaleStudents: 17,
            maleStudents: 13,
            professorBioData: {
                name: "sir zahid ahmed",
                qualification: "software engineer",
                isStrick: "no",
                age: 60,

            }
        },
        mechanicalEngineering: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir amir hussain",
                qualification: "software engineer",
                isStrick: "yes",
                age: 45,

            }
        },
        petroleumtEchnilogy: {
            totalStudents: 23,
            attendence: "90% attendence",
            progress: "good",
            femaleStudents: 13,
            maleStudents: 10,
            professorBioData: {
                name: "sir waheed zaki",
                qualification: "software engineer",
                isStrick: "yes",
                age: 44,

            }
        },
        electricalEngineering: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "sir tauqeer fasi",
                qualification: "software engineer",
                isStrick: "no",
                age: 50,

            }
        },

        BA: {
            totalStudents: 18,
            attendence: "full attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir faizan tahir",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
    }
    ],
    totalStudentsInArtsDeparment: [{
        BCOM: {
            totalStudents: 18,
            attendence: "full attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir faizan tahir",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
        BSC: {
            totalStudents: 18,
            attendence: "full attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir faizan tahir",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
        BBA: {
            totalStudents: 18,
            attendence: "full attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir faizan tahir",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
    }],



    totalStudentsInCommerceDeparment: [{
        ComputerizedAccounting: {
            totalStudents: 25,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 15,
            professorBioData: {
                name: "sir Abdul rehman",
                qualification: "software engineer",
                isStrick: "yes",
                age: 38,

            }
        },
        Banking: {
            totalStudents: 30,
            attendence: "70% attendence",
            progress: "better",
            femaleStudents: 17,
            maleStudents: 13,
            professorBioData: {
                name: "sir zahid ahmed",
                qualification: "software engineer",
                isStrick: "no",
                age: 60,

            }
        },
        AccountingFunctionInBusiness: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir amir hussain",
                qualification: "software engineer",
                isStrick: "yes",
                age: 45,

            }
        },
        FinancialAppraisal: {
            totalStudents: 23,
            attendence: "90% attendence",
            progress: "good",
            femaleStudents: 13,
            maleStudents: 10,
            professorBioData: {
                name: "sir waheed zaki",
                qualification: "software engineer",
                isStrick: "yes",
                age: 44,

            }
        },
        IslamicBanking: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "sir tauqeer fasi",
                qualification: "software engineer",
                isStrick: "no",
                age: 50,

            }
        },

        MarketingManagement: {
            totalStudents: 18,
            attendence: "full attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir faizan tahir",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
        InternationalBusinessManagement: {
            totalStudents: 18,
            attendence: "full attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir akter sameer",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
        InternationalBanking: {
            totalStudents: 18,
            attendence: "full attendence",
            progress: "better",
            femaleStudents: 12,
            maleStudents: 6,
            professorBioData: {
                name: "sir faizan tahir",
                qualification: "software engineer",
                isStrick: "no",
                age: 30,

            }
        },
    },
    ],
    totalStudentsInChemistryDeparment:[{
        chemistry: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir yonus hussain",
                qualification: "software engineer",
                isStrick: "yes",
                age: 45,

            }
        },
        chemicalEngineering: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir yonus hussain",
                qualification: "software engineer",
                isStrick: "yes",
                age: 45,

            }
        },
        appliedChemistry: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir yonus hussain",
                qualification: "software engineer",
                isStrick: "yes",
                age: 45,

            }
        },
        BA: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "sir umai mushtaq",
                qualification: "qualified in BA",
                isStrick: "no",
                age: 50,

            }
        },
        BSC: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "miss nosheen faraz",
                qualification: "qualified in BSC",
                isStrick: "no",
                age: 50,

            }
        },
        education: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "miss bareerah rahim",
                qualification: "qualified in education",
                isStrick: "no",
                age: 50,

            }
        },
        IslamicStudies: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "sir raheel kazmi",
                qualification: "qulified in islamic dtudies",
                isStrick: "no",
                age: 50,

            }
        },
        mastersInMathematics: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "sir fahad noman",
                qualification: "master in mathematics",
                isStrick: "no",
                age: 50,

            }
        },
        mastersInArabic: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "sir najam south",
                qualification: "master in arabic",
                isStrick: "no",
                age: 50,

            }
        },
        mastersInEnglish: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "sir shanawaz ali",
                qualification: "masters in English",
                isStrick: "no",
                age: 50,

            }
        },
        currentFacultyMember: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir yonus hussain",
                qualification: "qualified in current Faculty Member",
                isStrick: "yes",
                age: 45,

            }
        },
        appliedPhysics: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir fakhir muneeb",
                qualification: "qulified in applied physics",
                isStrick: "yes",
                age: 45,

            }
        },
        IBACenterForGirlsAndBoys : {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "naeem afzal",
                qualification: "qualified from IBA",
                isStrick: "yes",
                age: 45,

            }
        },
        BS: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir yonus hussain",
                qualification: "qualified in BS",
                isStrick: "yes",
                age: 45,

            }
        },
        ThermodynamicsAndStatisticalMechanics: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir ahmer najam",
                qualification: "qualified in Thermodynamics and statistical mechanics",
                isStrick: "yes",
                age: 45,

            }
        },
        ClassicalMechanics: {
            totalStudents: 13,
            attendence: "50% attendence",
            progress: "need to improve",
            femaleStudents: 5,
            maleStudents: 8,
            professorBioData: {
                name: "sir abid ali",
                qualification: "qulified in Classical mechanics.",
                isStrick: "yes",
                age: 45,

            }
        },

        BCOM: {
            totalStudents: 22,
            attendence: "full attendence",
            progress: "good",
            femaleStudents: 10,
            maleStudents: 12,
            professorBioData: {
                name: "miss nayab zaheer",
                qualification: "qualified in BCOM",
                isStrick: "no",
                age: 50,

            }
        },
    }],
        
    
    canteen:{
        CanteensOfKarachiUniversity:{
            totalCanteens:440,
            canteenFoods:[
                "fries",
                "burger",
                "juices",
                "chana chat",
                "pizzas",

            ]
        }
        },
            distanceBetweenEachDepartment:"5km",
            totalRikhshaw:40,
            facilitiesOfProfessorsOfKarachiUniversity:{
                facility:"homes in KU",
                facility:"indivisiual staff rooms",
                salaryPakkage:40000,
                dayCare:"for their babies",

            },
            eventsOfKarachiUniversity:{
                funfair:"for enjoyment of students",
                eidParty:"to celebrate eid",
                artCouncils:"for students",

            },
            securityGuards:{
                totalSecurityGuards:30,
                work:"to secure peoples of university",
                salaryPakkage:11000,
                dutyHours:"12 hours",

            },
            bankOfKarachiUniversity:{
                totalPeoplesWorkInBank:10,
                salaryPakkage30000,
                work:[
                    "to submit fees of students", 
                    "use for other personal work of KU"
                ],
                dutyHours:"8 hours",
            },
            photoCopyShopOfKarachiUniversity:{
                totalPeoplesWorkInPhotoCopyShop:2,
                work:[
                    "to photoCopyShop notes of students",
                    "to print voulchers",
                    "to plastic coating of their notes",

                ]
            },
            electricalEngineering: {
                totalStudents: 30,
                attendence: "70% attendence",
                progress: "better",
                femaleStudents: 17,
                maleStudents: 13,
                professorBioData: {
                    name: "sir zahid ahmed",
                    qualification: "software engineer",
                    isStrick: "no",
                    age: 60,
    
                }
            },
            mechanicalEngineering: {
                totalStudents: 13,
                attendence: "50% attendence",
                progress: "need to improve",
                femaleStudents: 5,
                maleStudents: 8,
                professorBioData: {
                    name: "sir amir hussain",
                    qualification: "software engineer",
                    isStrick: "yes",
                    age: 45,
    
                }
            },
            adminOffice:{
                work:"to give and take forms",
                work :"to give private forms",
                work:"to give regular forms",
                work:"to take admission of student"
            },
            fields: [
                "arts",
                "computer science",
                "engineering",
                "commerce",
            ],
            deparmentsNameOfComputerScience: [
                "UBIT",
                "PHD",
                "BS",
                "BCSCourseOutline",
                "contact",
                "programs",
            ],
            deparmentsNameOfEngineering: [
                " chemicalEngineering",
                "electricalEngineering",
                "mechanicalEngineering",
                "petroleumtEchnilogy",
                "electricalEngineering",
                "BSC",
            ],
            deparmentsNameOfArts: [
                "BA",
                "BCOM",
                "BBA",
        
            ],
            deparmentsNameOfCommerce: [
                "ComputerizedAccounting",
                "InternationalBanking",
                " InternationalBusinessManagement",
                "MarketingManagement",
                "IslamicBanking",
                "FinancialAppraisal",
                "AccountingFunctionInBusiness ",
                " Banking",
        
            ],
            deparmentsNameOfMedical:[
                "pharmacy",
                "botany",
                "facultyOfManagementAdministrativeSciences",
                "Faculty of Science.",
            ],
            deparmentsNameOfChemistry:[
                "applied chemistry",
                "chemical engineering",
                "chemical department",
            ],
            eventsOfKarachiUniversity:{
                funfair:"for enjoyment of students",
                eidParty:"to celebrate eid",
                artCouncils:"for students",

            },
            securityGuardsOfDepartment:{
                totalSecurityGuards:30,
                work:"to secure peoples of university",
                salaryPakkage:11000,
                dutyHours:"12 hours",

            },
            totalSemester:{
                regularTotalSemester:"3 semesters",
                feesOfPerSemesterOfPrivateStudents:30000,
                feesOfPerSemesterOfRegularStudents:15000,
            },
            totalSeatsInEachDepartment:200,
            totalLaboratoriesOfMedical:" 3 labs",
            totalLaboratoriesOfComputerScience:" 2 labs",
            totalLaboratoriesOfChemistry:" 3 labs",
            totalLaboratoriesOfPhysics:" 3 labs",
            groupsOfStudentOfPhysicsLab:10,
            groupsOfStudentOfChemistryLab:15,
            groupsOfStudentOfComputerLab:10,

            management:{
                work:[
                    "to control problem of university",
                    "to manage board authority",

                ],
                totalPeopleInManagement:21,
                salaryPakkage:840000,
                isWorkTogether:"yes",
                
            },
            scholarshipOpputunity:{
                scholarshipGiveTo:"if student obedient",
                scholarshipGiveTo:"if 100% result",
                scholarshipGiveTo:"if a good activities",
                scholarshipGiveTo:"if is a helpful",
                scholarshipGiveTo:"if he respect teachers",
            },

            goldmaddleOpputunity:{
            GiveTo:"if student obedient",
                GiveTo:"if 100% result",
                GiveTo :"if a good activities",
                :"if is a helpful",
                GiveTo if he respect teachers",
            },










}