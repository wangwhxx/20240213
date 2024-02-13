var config = {
    style: 'mapbox://styles/wwhxxx/clskid7c700h501qxd21j28td/draft',
    accessToken: 'pk.eyJ1Ijoid3doeHh4IiwiYSI6ImNsbGFhOXlpYzFodXIzZHNzMmNuMmFiMDUifQ.ibgzpwGz2pUSbCnBWuFg4Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Public Transport and Facilities in Singapore',
    subtitle: 'Go out and get community care',
    byline: 'By Wang Wenhan',
    footer: 'Source: data.gov.sg. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'MRT in Singapore',
            image: 'network_map_2022_November.png',
            description: 'The Mass Rapid Transit system, locally known by the initialism MRT, is a rapid transit system in Singapore.The network has since grown to span the length and breadth of the countrys main island in accordance with Singapores aim of developing a comprehensive rail network as the backbone of the countrys public transportation system,averaging a daily ridership of 3.4 million in 2019.',
            location: {
                center: [103.845507,1.332462],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MRT line',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'MRT station',
                    opacity: 1,
                    duration: 5000              
                },
                {
                    layer: 'CC',
                    opacity: 0,
                    duration: 5000                
                },
                {
                    layer: 'sportsfields',
                    opacity: 0,
                    duration: 5000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'MRT line',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'MRT station',
                    opacity: 1,
                    duration: 5000              
                },
                {
                    layer: 'sportsfields',
                    opacity: 0
                },
                {
                    layer: 'CC',
                    opacity: 0                
                },
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Getting Around by Public Transport',
            image: 'the-new-trains-for-the.jpg',
            description: 'By Public Transport. MRT and bus systems have an extensive network of routes that will help you zip around the city. Most of our popular attractions are just a short walk away from an MRT station, making our trains a great way to get around.',
            location: {
                center: [103.851401,1.290868],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MRT line',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'MRT station',
                    opacity: 1,
                    duration: 5000              
                },
                {
                    layer: 'CC',
                    opacity: 0,
                    duration: 5000                
                },
                {
                    layer: 'sportsfields',
                    opacity: 0,
                    duration: 5000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'MRT line',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'MRT station',
                    opacity: 1,
                    duration: 5000              
                },
                {
                    layer: 'sportsfields',
                    opacity: 0
                },
                {
                    layer: 'CC',
                    opacity: 0                
                },
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Community Clubs',
            image: 'katong-cc.jpg',
            description: 'The Singapore Community Club, also known as the Community Club (CC),serves as a common space for people of all races to come together, build friendships, and promote social bonding. CCs connect residents and provide various facilities, courses, and interest groups for community members.',
            location: {
                center: [103.813678,1.335408],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MRT line',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'MRT station',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'CC',
                    opacity: 0.9,
                    duration: 5000                
                },
                {
                    layer: 'sportsfields',
                    opacity: 0,
                    duration: 5000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'MRT line',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'MRT station',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'CC',
                    opacity: 1                
                },
                {
                    layer: 'sportsfields',
                    opacity: 0
                },
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Sports Facilities',
            image: 'SingaporeSportsHub_Masthead.jpg',
            description: 'Sport Singapore believes that well-designed and efficiently run sports facilities will significantly open up opportunities for a more sporting, recreational and wellness lifestyle for all Singaporeans. ',
            location: {
                center: [103.813678,1.335408],
                zoom: 11.5,
                pitch: 45,
                bearing: -20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MRT line',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'MRT station',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'CC',
                    opacity: 0,
                    duration: 5000                
                },
                {
                    layer: 'sportsfields',
                    opacity: 0.9,
                    duration: 5000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'MRT line',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'MRT station',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'CC',
                    opacity: 0                
                },
                {
                    layer: 'sportsfields',
                    opacity: 1
                },
            ]
        }
    ]
};