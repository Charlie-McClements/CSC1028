//data creation from json file

var data = ({
    "date" : new Date(),
    "company" : {
        "name": "French Village LTD",
        "type": "Bakery",
        "status": "Active",
        "dateOpened": "23092013",
        "daysOpen": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    

        "Employees": [

            {
                "employeeName": "Monica Geller",
                "status": "Active",
                "startDate" : "23092013",
                "leaveStatus": null,
                "employeeType": "Director",
                "shiftStatus": true,
                "contract": "FT",
                "workingHours": 37.5,
                "leaveTaken": 180,
                "overtime": 0,
                "gender": "F",
                "salary": 38000,
                "unionMember": false,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": null,
                    "satSurveyCompleted": null,
                    "workerSatisfactionRating": null
                }
                
            },
            {
                "employeeName": "Ross Geller",
                "status": "Active",
                "startDate" : "23092013",
                "leaveStatus": null,
                "employeeType": "Director",
                "shiftStatus": true,
                "contract": "FT",
                "workingHours": 37.5,
                "leaveTaken": 172,
                "overtime": 0,
                "gender": "M",
                "salary": 38000,
                "unionMember": false,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": null,
                    "satSurveyCompleted": null,
                    "workerSatisfactionRating": null
                }
            },
             {
                "employeeName": "Chandler Bing",
                "status": "Active",
                "startDate" : "10012014",
                "leaveStatus": null,
                "employeeType": "Administration",
                "shiftStatus": true,
                "contract": "FT",
                "workingHours": 37.5,
                "leaveTaken": 168,
                "overtime": 0,
                "gender": "M",
                "salary": 28500,
                "unionMember": false,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 9.0
                }
            },
             {
                "employeeName": "Phoebe Buffay",
                "status": "Active",
                "startDate" : "22062018",
                "leaveStatus": null,
                "employeeType": "Social Media Manager",
                "shiftStatus": true,
                "contract": "PT",
                "workingHours": 20,
                "leaveTaken": 78,
                "overtime": 0,
                "gender": "F",
                "salary": 22000,
                "unionMember": true,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 8.7
                }
            },
            {
                "employeeName": "Rachel Green",
                "status": "Inactive",
                "startDate" : "13022014",
                "leaveStatus": null,
                "employeeType": "General Manager",
                "shiftStatus": true,
                "contract": "FT",
                "workingHours": 37.5,
                "leaveTaken": 178,
                "overtime": 0,
                "gender": "F",
                "salary": 28500,
                "unionMember": true,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 8.8
                }
            },
            {
                "employeeName": "Joey Tribbiani",
                "status": "Active",
                "startDate" : "18042018",
                "leaveStatus": null,
                "employeeType": "Team Lead",
                "shiftStatus": false,
                "contract": "PT",
                "workingHours": 20,
                "leaveTaken": 156,
                "overtime": 0,
                "gender": "M",
                "salary": 22500,
                "unionMember": true,
                "employeeBenefits": false,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 8.2
                }
            },
             {
                "employeeName": "Carol Willick",
                "status": "Active",
                "startDate" : "15012014",
                "leaveStatus": null,
                "employeeType": "Baker",
                "shiftStatus": true,
                "contract": "FT",
                "workingHours": 37.5,
                "leaveTaken": 161,
                "overtime": 0,
                "gender": "F",
                "salary": 26000,
                "unionMember": false,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 9.2
                }
            },
             {
                "employeeName": "Susan Bunch",
                "status": "Active",
                "startDate" : "02082016",
                "leaveStatus": null,
                "employeeType": "Baker",
                "shiftStatus": true,
                "contract": "PT",
                "workingHours": 30,
                "leaveTaken": 156,
                "overtime": 0,
                "gender": "F",
                "salary": 23000,
                "unionMember": true,
                "employeeBenefits": false,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 9.0
                }
                
            },
            {
                "employeeName": "Janice Hosenstein",
                "status": "Active",
                "startDate" : "18032014",
                "leaveStatus": null,
                "employeeType": "Store Assistant",
                "contract": "FT",
                "workingHours": 37.5,
                "shiftStatus": true,
                "leaveTaken": 193,
                "overtime": 0,
                "gender": "F",
                "salary": 18700,
                "unionMember": true,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 8.0
                }
            },
            {
                "employeeName": "Mike Hannigan",
                "status": "Active",
                "startDate" : "23022019",
                "leaveStatus": null,
                "employeeType": "Store Assistant",
                "shiftStatus": false,
                "contract": "PT",
                "workingHours": 12,
                "leaveTaken": 60,
                "overtime": 0,
                "gender": "M",
                "salary": 5500,
                "unionMember": false,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 7.8
                }
            },
            {
                "employeeName": "Richard Burke",
                "status": "Active",
                "startDate" : "08122020",
                "leaveStatus": null,
                "employeeType": "Store Assistant",
                "shiftStatus": true,
                "contract": "PT",
                "workingHours": 10,
                "leaveTaken": 55,
                "overtime": 0,
                "gender": "M",
                "salary": 4300,
                "unionMember": true,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 8.6
                }
            },
            {
                "employeeName": "Alice Knight",
                "status": "Active",
                "startDate" : "04072015",
                "leaveStatus": null,
                "employeeType": "Store Assistant",
                "shiftStatus": true,
                "contract": "PT",
                "workingHours": 7.5,
                "leaveTaken": 33,
                "overtime": 0,
                "gender": "F",
                "salary": 3100,
                "unionMember": true,
                "employeeBenefits": true,
                "employeeSatisfaction" : {
                    "satSurveyReceived": true,
                    "satSurveyCompleted": true,
                    "workerSatisfactionRating": 7.2
                }
        }
            

    ],

        "Products": [
            {
                "productName": "German Biscuits",
                "yearCreated": 2014,
                "numInStock": 112,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 1,
                "numRawMaterialsPerBake": 3, 
                "productSalePrice": 4.50,
                "discount": 0.00,
                "packagingCost": 0.04,
                "productionCost": 0.90,
                "purchasedByVendor": 50,
                "vendorPrice": 3.00,
                "volumeMadePerYear": 3120,
                "volumeSoldPerYear": 3120,
                "totalPackagingCost": 2808,
                "totalSale": 14040,
                "profit": 11232
            },
            {
                "productName": "Vegan Brownie Slab",
                "lengthOfAvailability": 2,
                "numInStock": 24,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 1,
                "numRawMaterialsPerBake": 5, 
                "productSalePrice": 6.50,
                "discount": 0.00,
                "packagingCost": 0.07,
                "productionCost": 2.90,
                "purchasedByVendor": 25,
                "vendorPrice": 4.50,
                "volumeMadePerYear": 1440,
                "volumeSoldPerYear": 1422,
                "totalPackagingCost": 4176,
                "totalSale": 9243,
                "profit": 5067
            },
            {
                "productName": "Raspberry Creams",
                "lengthOfAvailability": 1,
                "numInStock": 126,
                "outOfStock": false,
                "bakedEachTime": 40,
                "timeToBake": 1.5,
                "numRawMaterialsPerBake": 3, 
                "productSalePrice": 3.30,
                "discount": 0.00,
                "packagingCost": 0.04,
                "productionCost": 0.40,
                "purchasedByVendor": 45,
                "vendorPrice": 1.80,
                "volumeMadePerYear": 3120,
                "volumeSoldPerYear": 3120,
                "totalPackagingCost": 1248,
                "totalSale": 10296,
                "profit": 9048
            },
            {
                "productName": "Raspberry and White Chocolate Gateau",
                "yearCreated": 2014,
                "numInStock": 21,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 2,
                "numRawMaterialsPerBake": 9, 
                "productSalePrice": 16.00,
                "discount": 0.00,
                "packagingCost": 0.08,
                "productionCost": 6.80,
                "purchasedByVendor": 20,
                "vendorPrice": 10.50,
                "volumeMadePerYear": 720,
                "volumeSoldPerYear": 720,
                "totalPackagingCost": 4896,
                "totalSale": 11520,
                "profit": 6624
            },
            {
                "productName": "Red Velvet Gateau",
                "yearCreated": 2015,
                "numInStock": 18,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 2,
                "numRawMaterialsPerBake": 10, 
                "productSalePrice": 16.00,
                "discount": 0.00,
                "packagingCost": 0.08,
                "productionCost": 7.20,
                "purchasedByVendor": 15,
                "vendorPrice": 11.50,
                "volumeMadePerYear": 480,
                "volumeSoldPerYear": 472,
                "totalPackagingCost": 3456,
                "totalSale": 7552,
                "profit": 4096
            },
            {
                "productName": "Pavlova Base",
                "yearCreated": 2016,
                "numInStock": 9,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 1,
                "numRawMaterialsPerBake": 2, 
                "productSalePrice": 9.50,
                "discount": 0.00,
                "packagingCost": 0.05,
                "productionCost": 2.30,
                "purchasedByVendor": 15,
                "vendorPrice": 4.50,
                "volumeMadePerYear": 384,
                "volumeSoldPerYear": 384,
                "totalPackagingCost": 883.20,
                "totalSale": 3648,
                "profit": 2764
            },
            {
                "productName": "Raspberry and White Chocolate Scones",
                "yearCreated": 2014,
                "numInStock": 62,
                "outOfStock": false,
                "bakedEachTime": 30,
                "timeToBake": 2,
                "numRawMaterialsPerBake": 4, 
                "productSalePrice": 4.00,
                "discount": 0.00,
                "packagingCost": 0.04,
                "productionCost": 0.20,
                "purchasedByVendor": 45,
                "vendorPrice": 1.80,
                "volumeMadePerYear": 3360,
                "volumeSoldPerYear": 3360,
                "totalPackagingCost": 672,
                "totalSale": 13440,
                "profit": 12768
            },
            {
                "productName": "Soda Bread",
                "lengthOfAvailability": 3,
                "numInStock": 46,
                "outOfStock": false,
                "bakedEachTime": 30,
                "timeToBake": 1.5,
                "numRawMaterialsPerBake": 2, 
                "productSalePrice": 2.80,
                "discount": 0.00,
                "packagingCost": 0.01,
                "productionCost": 0.15,
                "purchasedByVendor": 40,
                "vendorPrice": 1.00,
                "volumeMadePerYear": 1920,
                "volumeSoldPerYear": 1920,
                "totalPackagingCost": 288,
                "totalSale": 5376,
                "profit": 5088
            },
            {
                "productName": "12 Puddle Donuts",
                "lengthOfAvailability": 2,
                "numInStock": 22,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 2.5,
                "numRawMaterialsPerBake": 6, 
                "productSalePrice": 21.00,
                "discount": 0.00,
                "packagingCost": 0.12,
                "productionCost": 5.45,
                "purchasedByVendor": 15,
                "vendorPrice": 13.50,
                "volumeMadePerYear": 2160,
                "volumeSoldPerYear": 2148,
                "totalPackagingCost": 11772,
                "totalSale": 45108,
                "profit": 5067
            },
            {
                "productName": "Raspberry Ruffle Cheesecake",
                "yearCreated": 2016,
                "numInStock": 9,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 1.75,
                "numRawMaterialsPerBake": 9, 
                "productSalePrice": 18.95,
                "discount": 2.50,
                "packagingCost": 0.10,
                "productionCost": 6.30,
                "purchasedByVendor": 25,
                "vendorPrice": 9.50,
                "volumeMadePerYear": 2400,
                "volumeSoldPerYear": 2382,
                "totalPackagingCost": 15120,
                "totalSale": 44900.70,
                "profit": 29780.70
            },
            {
                "productName": "French Village Biscuits",
                "yearCreated": 2014,
                "numInStock": 43,
                "outOfStock": false,
                "bakedEachTime": 35,
                "timeToBake": 1.5,
                "numRawMaterialsPerBake": 4, 
                "productSalePrice": 4.50,
                "discount": 0.00,
                "packagingCost": 0.04,
                "productionCost": 0.90,
                "purchasedByVendor": 60,
                "vendorPrice": 2.30,
                "volumeMadePerYear": 3840,
                "volumeSoldPerYear": 3840,
                "totalPackagingCost": 3456,
                "totalSale": 24960,
                "profit": 21504
            },
            {
                "productName": "Jammiest Dodger Biscuits",
                "yearCreated": 2019,
                "numInStock": 6,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 1,
                "numRawMaterialsPerBake": 3, 
                "productSalePrice": 4.00,
                "discount": 0.00,
                "packagingCost": 0.04,
                "productionCost": 1.00,
                "purchasedByVendor": 40,
                "vendorPrice": 2.00,
                "volumeMadePerYear": 4800,
                "volumeSoldPerYear": 4800,
                "totalPackagingCost": 4800,
                "totalSale": 31200,
                "profit": 26400
            },
            {
                "productName": "English Muffins",
                "yearCreated": 2018,
                "numInStock": 92,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 1.5,
                "numRawMaterialsPerBake": 3, 
                "productSalePrice": 3.50,
                "discount": 0.00,
                "packagingCost": 0.20,
                "productionCost": 0.90,
                "purchasedByVendor": 65,
                "vendorPrice": 2.00,
                "volumeMadePerYear": 3120,
                "volumeSoldPerYear": 3120,
                "totalPackagingCost": 2808,
                "totalSale": 14040,
                "profit": 11232
            },
            {
                "productName": "Belfast Baps",
                "yearCreated": 2014,
                "numInStock": 112,
                "outOfStock": false,
                "bakedEachTime": 20,
                "timeToBake": 1,
                "numRawMaterialsPerBake": 4, 
                "productSalePrice": 4.50,
                "discount": 0.00,
                "packagingCost": 0.04,
                "productionCost": 0.90,
                "purchasedByVendor": 50,
                "vendorPrice": 3.00,
                "volumeMadePerYear": 3120,
                "volumeSoldPerYear": 3120,
                "totalPackagingCost": 2808,
                "totalSale": 14040,
                "profit": 11232
            }


        ],
        
        "AdminManagement": {
            "Bakery": {
                "rawMaterialsStock": 55,
                "rawMaterialsCostPerDelivery": 385.50,
                "scheduleMaterialsDelivery": false,
                "expectedDeliveryDate": new Date(),
                "rawSuppliesDelivered": false,
            },
            "LicencingCosts": {
                "Legal": {
                    "status": "active",
                    "annualCosts":1000,
                    "billPaymentDue": "29032021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDate": "20032021",
                    "lateFee": null
                },
                "Accounting": {
                    "status": "active",
                    "annualCosts": 2500,
                    "billPaymentDue": "31022021",
                    "billReminderReceived": false,
                    "billPaid": true,
                    "billPaidDate": "20022021",
                    "lateFee": null
                },
                "SecurityCCTV": {
                    "status": "active",
                    "annualCosts": 70,
                    "billPaymentDue": "30122021",
                    "billReminderReceived": false,
                    "billPaid": false,
                    "billPaidDate": null,
                    "lateFee": null
                },
                "StreetDisplayLicence": {
                    "status": "active",
                    "annualCosts": 800,
                    "billPaymentDue": "31122021",
                    "billReminderReceived": false,
                    "billPaid": false,
                    "billPaidDate": null,
                    "lateFee": null
                },
                "MusicLicence": {
                    "status": "active",
                    "annualCosts": 300,
                    "billPaymentDue": "01042021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDate": "31032021",
                    "lateFee": null
                }
            },

            "InsuranceCosts": {
                "EmployeeLiability" : {
                    "status": "active",
                    "annualCosts": 3200,
                    "billPaymentDue": "01012021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDate": "20122020",
                    "lateFee": null
                },
                "PublicLiability" : {
                    "status": "active",
                    "annualCosts": 80,
                    "billPaymentDue": "01012021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDate": "20122020",
                    "lateFee": null
                },
                "ContentsInsurance" : {
                    "status": "active",
                    "annualCosts": 210,
                    "billPaymentDue": "01042021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDate": "22032021",
                    "lateFee": null
                }
            },

            "Compliance": {
                "companyHouseDueDate": "10112021",
                "companyHouseFileDate": "04112021",
                "reminderReceived": true,
                "compliancePenalties": 0,
                "penaltyFee": null
            },

            "Management": {
                "EmployeeSatisfaction": {
                    "annualSurveyDate": "01082021",
                    "surveySent": true,
                    "surveySentDate": "01082021",
                    "surveyRemindersSentDate": "10082021",
                    "allSurveysReceived": "12082021"
                },
                "Stock": {
                    "productsOutOfStock": true,
                    "reminderToKitchen": true,
                    "bakingFinishTime": new Date(),
                },
                "Vendor": {
                    "vendorName": "Ward's Local",
                    "vendorStatus": "active",
                    "vendorReminderToKitchen": false,
                    "vendorProductsDelivered": false,
                    "vendorPaymentReminderSent": true,
                    "vendorLateReminderSent": false,
                    "vendorLateFee": 25.00,
                    "vendorCurrentBill": 0.00,
                    "vendorPaymentReceived": true,
                    "totalReceivedFromVendor": 6542.00
                }
            }


        },

        "Resources": {
            "ShopCosts": {
                "ShopInsurance" : {
                    "status": "active",
                    "regularity": "monthly",
                    "costs": 17.50,
                    "billDayDue": 1,
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": "1",
                    "lateFee": null
                },
                "Electricity": {
                    "status": "active",
                    "regularity": "monthly",
                    "costs": 52.08,
                    "billDayDue": 1,
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": 1,
                    "lateFee": null
                },
                "Rates": {
                    "status": "active",
                    "regularity": "yearly",
                    "costs": 5200,
                    "billDayDue": "09072021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": "01072021",
                    "lateFee": null
                },
                "Mortgage": {
                    "status": "active",
                    "regularity": "monthly",
                    "costs": 1250,
                    "billDayDue": 1,
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": 1,
                    "lateFee": null
                },
                "Cleaning": {
                    "status": "active",
                    "regularity": "monthly",
                    "costs": 46,
                    "billDayDue": 28,
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": 28,
                    "lateFee": null
                },
                "Telecoms": {
                    "status": "active",
                    "regularity": "monthly",
                    "costs": 80,
                    "billDayDue": 15,
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": 10,
                    "lateFee": null
                },
                "Stationary": {
                    "status": "active",
                    "regularity": "adhoc",
                    "costs": 15,
                    "billDayDue": null,
                    "billReminderReceived": null,
                    "billPaid": true,
                    "billPaidDay": null,
                    "lateFee": null
                },
                "BrandedCarrierBags": {
                    "status": "active",
                    "regularity": "yearly",
                    "costs": 120,
                    "billDayDue": "18012021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": "05012021",
                    "lateFee": null
                },
                "BusinessCards": {
                    "status": "active",
                    "regularity": "yearly",
                    "costs": 24.95,
                    "billDayDue": "18012021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": "05012021",
                    "lateFee": null
                },
                "ShopMaintenance": {
                    "status": "active",
                    "regularity": "adhoc",
                    "costs": 35,
                    "billDayDue": null,
                    "billReminderReceived": null,
                    "billPaid": true,
                    "billPaidDay": null,
                    "lateFee": null
                },
                "softwareEPOS": {
                    "status": "active",
                    "regularity": "yearly",
                    "costs": 420,
                    "billDayDue": "23082021",
                    "billReminderReceived": true,
                    "billPaid": true,
                    "billPaidDay": "23082021",
                    "lateFee": null
                },
                "StaffItems": {
                    "status": "active",
                    "regularity": "adhoc",
                    "costs": 18,
                    "billDayDue": null,
                    "billReminderReceived": null,
                    "billPaid": true,
                    "billPaidDay": null,
                    "lateFee": null
                }
            },
            "WebsiteCosts": {
                "status": "active",
                "regularity": "yearly",
                "domainCosts": 20,
                "hostingCosts": 720,
                "changeCosts": 300,
                "billDayDue": "02032021",
                "billReminderReceived": true,
                "billPaid": true,
                "billPaidDay": "02032021",
                "lateFee": null
            }

        },

        "MarketingCustomerRelations": {
            "HardAdvertisement": {
                "type": "newspaper",
                "status": "active",
                "cost": 550,
                "billPaid": true,
                "datePurchased": "16082021",
                "dateOfRenewal": "16022021"
            },
            "SoftAvertisement": {
                "type": "social media package",
                "status": "active",
                "cost": 990,
                "billPaid": true,
                "datePurchased": "17042021",
                "dateOfRenewal": "17042022"
            },
            "CustomerService" : {
                "Enquiry" : {
                "contactReceived": true,
                "status": "open",
                "origin": "email",
                "dateReceived": 14112021,
                "customerRef": "002148"
                },
                "Complaint" : {
                "contactReceived": false,
                "status": null,
                "origin": null,
                "dateReceived": null,
                "customerRef": null
                }
            },

            "socialMediaPosts": [
                {
                    "platform": ["twitter", "facebook", "instagram"],
                    "dateOfPost": "10112021",
                    "status": "live",
                    "uniqueViews": 8032,
                    "clicks": 5377,
                    "likes": 3844,
                    "comments": 469
                },
                {
                    "platform": ["facebook", "instagram"],
                    "dateOfPost": "01112021",
                    "status": "live",
                    "uniqueViews": 10322,
                    "clicks": 5206,
                    "likes": 2291,
                    "comments": 227
                }

            ]

        },

        "Customers": [
            {
                "dateOfVisit": new Date('2021-11-17T10:24:00'),
                "likelihoodOfRepeatVisit": 0.0,
                "visitedBefore": false,
                "customerStatus": "new",
                "loyaltyCard": true,
                "loyaltyVisitNumber": 1,
                "customerDisc": 0.00,
                "customerDOB": new Date('1990-06-13T00:00:00'),
                "datePaid": new Date('2021-11-01T00:00:00'),
                "birthday": false,
                "numProductsBought": 4,
                "productsBought": ["German Biscuits", "French Village Biscuits", "Soda Bread", "Soda Bread"],
                "customerBudget": 30.00,
                "socialMediaUser": true,
                "previousCustomerContact": false,
                "tipAmount": 0.00,
                "staffMemberTipped": null
            },
            {
                "dateOfVisit": new Date('2021-11-29T13:32:00'),
                "likelihoodOfRepeatVisit": 0.0,
                "visitedBefore": true,
                "customerStatus": "returning",
                "loyaltyCard": true,
                "loyaltyVisitNumber": 20,
                "customerDisc": 0.10,
                "customerDOB": new Date('1975-02-18T00:00:00'),
                "datePaid": new Date('2021-11-30T00:00:00'),
                "birthday": "false",
                "numProductsBought": 2,
                "productsBought": ["French Village Biscuits", "Soda Bread"],
                "customerBudget": 15.00,
                "socialMediaUser": true,
                "previousCustomerContact": false,
                "tipAmount": 2.00,
                "staffMemberTipped": "Rachel Green"
            }

        ],

        "Finances": {
            "bankBalance": 352544.92,
            "Turnover": {
                "annualProfit": "",
                "annualLoss": "",
                "breakEven": false,
                "budgetForecast": ""
            },
            "Banking": {
                "Outgoing": {
                    "incomeTax": "",
                    "staffPayRoll": 258100,
                    "staffPaidOnTime": true,
                    "annualLoanRepaymentsPerYear": "",
                    "annualLoanInterestPerYear": 0.2,
                    "loanRepaymentsLateFine": 0,
                    "supplierCosts": 0.00,
                    "accountsPayableOnTime": true
                },
                "Ingoing": {
                    "accountsReceivableOnTime": false,
                    "externalSupplierIncome": 0.00,
                    "salesIncome": "",
                    "taxRelief": 0,
                    "totalProductCreationCosts": "",
                    "totalProductSaleIncome": "",
                    "totalTips": ""
                }
                
            }

        }

    }
});


//testing variable
console.log(data.company.name);