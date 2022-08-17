const Venue = {
     id: string,
     uuid: string,
     institutionId: number,
     name: string,
     street: string,
     city: string,
     state: string,
     zipcode: string,
     latitude: number,
     longitude: number,
     website: string,
     stageConfiguration: [string],
     specialFeatures: string,
     venueCapacity: string,
     completionYear: string,
     resourceLocation: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     institution: {
     id: number,
     uuid: string,
     type: string,
     name: string,
     street: string,
     city: string,
     state: string,
     zipcode: string,
     latitude: number,
     longitude: number,
     website: string,
     resourceLocation: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     programs: [{
     id: number,
     uuid: string,
     institutionId: number,
     name: string,
     artistHeadId: number,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     institution: {
     },
     artistHead: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     featuredProductions:[{
     id: number,
     uuid: string,
     institutionId: string,
     institutionProgramId: string,
     playId: string,
     venueId: string,
     runtime: number,
     productionStartDate: string($date-time),
     productionEndDate: string($date-time),
     captureStartDate: string($date-time),
     captureEndDate: string($date-time),
     themes: [string],
     licenseType: string,
     stageConfiguration: string,
     percentSeatsSold: number,
     resourceLocation: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     institution: {
     },
     institutionProgram: {
     },
     play: {
     id: number,
     uuid: string,
     brandId: number,
     brand: {
     id: number,
     uuid: string,
     name: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     plays: [{
     }],
     },
     playType: string,
     Enum:
     [ PLAY, MUSICAL ],
     licenseName: string,
     licenseHouse: string,
     licenseWebsite: string,
     originalProductionYear: string,
     shortDescription: string,
     longDescription: string,
     synopsis: string,
     history: string,
     duration: number,
     awards: [string],
     genres: [string],
     musicStyles: [string],
     themes: [string],
     vocalRequirements: [string],
     ensembleSize: string,
     numberOfActs: number,
     audienceRating: string,
     playSetting: string,
     danceRequirements: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     characters: [{
     id: number,
     uuid: string,
     playId: string,
     name: string,
     tier: string,
     gender: string,
     ageRangeTop: number,
     ageRangeBottom: number,
     race: string,
     vocalRangeTop: string,
     vocalRangeBottom: string,
     voiceType: string,
     castingNotes: string,
     description: string,
     ethnicity: string,
     play: {
     },
     }],
     songs: [{
     id: number,
     uuid: string,
     playId: number,
     name: string,
     website: string,
     songDuration: string,
     scoreNumber: string,
     description: string,
     play: {
     },
     }],
     orchestrations: [{
     id: number,
     uuid: string,
     playId: string,
     orchestraName: string,
     orchestraSize: string,
     orchestraDescription: string,
     }],
     contributions: [{
     id: number,
     uuid: string,
     playId: number,
     artistId: number,
     contributionType: string,
     contributionName: string,
     award: string,
     play: {
     },
     artist: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     }],
     featuredProductions: [{
     }],
     featuredArtistContributions: [{
     }],
     },
     venue: {
     },
     contributions: [{
     id: number,
     uuid: string,
     productionId: number,
     artistId: number,
     contributionType: string,
     contributionName: string,
     award: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     production: {
     },
     artist: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     }],
     featuredArtistContributions: [{
     }],
     }],
     featuredArtistContributions: [{
     }],
     }],
     productions:[{
     id: number,
     uuid: string,
     institutionId: string,
     institutionProgramId: string,
     playId: string,
     venueId: string,
     runtime: number,
     productionStartDate: string($date-time),
     productionEndDate: string($date-time),
     captureStartDate: string($date-time),
     captureEndDate: string($date-time),
     themes: [string],
     licenseType: string,
     stageConfiguration: string,
     percentSeatsSold: number,
     resourceLocation: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     institution: {
     },
     institutionProgram: {
     },
     play: {
     id: number,
     uuid: string,
     brandId: number,
     brand: {
     id: number,
     uuid: string,
     name: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     plays: [{
     }],
     },
     playType: string,
     Enum:
     [ PLAY, MUSICAL ],
     licenseName: string,
     licenseHouse: string,
     licenseWebsite: string,
     originalProductionYear: string,
     shortDescription: string,
     longDescription: string,
     synopsis: string,
     history: string,
     duration: number,
     awards: [string],
     genres: [string],
     musicStyles: [string],
     themes: [string],
     vocalRequirements: [string],
     ensembleSize: string,
     numberOfActs: number,
     audienceRating: string,
     playSetting: string,
     danceRequirements: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     characters: [{
     id: number,
     uuid: string,
     playId: string,
     name: string,
     tier: string,
     gender: string,
     ageRangeTop: number,
     ageRangeBottom: number,
     race: string,
     vocalRangeTop: string,
     vocalRangeBottom: string,
     voiceType: string,
     castingNotes: string,
     description: string,
     ethnicity: string,
     play: {
     },
     }],
     songs: [{
     id: number,
     uuid: string,
     playId: number,
     name: string,
     website: string,
     songDuration: string,
     scoreNumber: string,
     description: string,
     play: {
     },
     }],
     orchestrations: [{
     id: number,
     uuid: string,
     playId: string,
     orchestraName: string,
     orchestraSize: string,
     orchestraDescription: string,
     }],
     contributions: [{
     id: number,
     uuid: string,
     playId: number,
     artistId: number,
     contributionType: string,
     contributionName: string,
     award: string,
     play: {
     },
     artist: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     }],
     featuredProductions: [{
     }],
     featuredArtistContributions: [{
     }],
     },
     venue: {
     },
     contributions: [{
     id: number,
     uuid: string,
     productionId: number,
     artistId: number,
     contributionType: string,
     contributionName: string,
     award: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     production: {
     },
     artist: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     }],
     featuredArtistContributions: [{
     }],
     }],
     featuredProductions:[{
     id: number,
     uuid: string,
     institutionId: string,
     institutionProgramId: string,
     playId: string,
     venueId: string,
     runtime: number,
     productionStartDate: string($date-time),
     productionEndDate: string($date-time),
     captureStartDate: string($date-time),
     captureEndDate: string($date-time),
     themes: [string],
     licenseType: string,
     stageConfiguration: string,
     percentSeatsSold: number,
     resourceLocation: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     institution: {
     },
     institutionProgram: {
     },
     play: {
     id: number,
     uuid: string,
     brandId: number,
     brand: {
     id: number,
     uuid: string,
     name: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     plays: [{
     }],
     },
     playType: string,
     Enum:
     [ PLAY, MUSICAL ],
     licenseName: string,
     licenseHouse: string,
     licenseWebsite: string,
     originalProductionYear: string,
     shortDescription: string,
     longDescription: string,
     synopsis: string,
     history: string,
     duration: number,
     awards: [string],
     genres: [string],
     musicStyles: [string],
     themes: [string],
     vocalRequirements: [string],
     ensembleSize: string,
     numberOfActs: number,
     audienceRating: string,
     playSetting: string,
     danceRequirements: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     characters: [{
     id: number,
     uuid: string,
     playId: string,
     name: string,
     tier: string,
     gender: string,
     ageRangeTop: number,
     ageRangeBottom: number,
     race: string,
     vocalRangeTop: string,
     vocalRangeBottom: string,
     voiceType: string,
     castingNotes: string,
     description: string,
     ethnicity: string,
     play: {
     },
     }],
     songs: [{
     id: number,
     uuid: string,
     playId: number,
     name: string,
     website: string,
     songDuration: string,
     scoreNumber: string,
     description: string,
     play: {
     },
     }],
     orchestrations: [{
     id: number,
     uuid: string,
     playId: string,
     orchestraName: string,
     orchestraSize: string,
     orchestraDescription: string,
     }],
     contributions: [{
     id: number,
     uuid: string,
     playId: number,
     artistId: number,
     contributionType: string,
     contributionName: string,
     award: string,
     play: {
     },
     artist: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     }],
     featuredProductions: [{
     }],
     featuredArtistContributions: [{
     }],
     },
     venue: {
     },
     contributions: [{
     id: number,
     uuid: string,
     productionId: number,
     artistId: number,
     contributionType: string,
     contributionName: string,
     award: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     production: {
     },
     artist: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     }],
     featuredArtistContributions: [{
     }],
     }],
     featuredArtistContributions: [{
     }],
     },
     productions:[{
     id: number,
     uuid: string,
     institutionId: string,
     institutionProgramId: string,
     playId: string,
     venueId: string,
     runtime: number,
     productionStartDate: string($date-time),
     productionEndDate: string($date-time),
     captureStartDate: string($date-time),
     captureEndDate: string($date-time),
     themes: [string],
     licenseType: string,
     stageConfiguration: string,
     percentSeatsSold: number,
     resourceLocation: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     institution: {
     },
     institutionProgram: {
     },
     play: {
     id: number,
     uuid: string,
     brandId: number,
     brand: {
     id: number,
     uuid: string,
     name: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     plays: [{
     }],
     },
     playType: string,
     Enum: [ PLAY, MUSICAL ],
     licenseName: string,
     licenseHouse: string,
     licenseWebsite: string,
     originalProductionYear: string,
     shortDescription: string,
     longDescription: string,
     synopsis: string,
     history: string,
     duration: number,
     awards: [string],
     genres: [string],
     musicStyles: [string],
     themes: [string],
     vocalRequirements: [string],
     ensembleSize: string,
     numberOfActs: number,
     audienceRating: string,
     playSetting: string,
     danceRequirements: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     characters: 
     [{
     id: number,
     uuid: string,
     playId: string,
     name: string,
     tier: string,
     gender: string,
     ageRangeTop: number,
     ageRangeBottom: number,
     race: string,
     vocalRangeTop: string,
     vocalRangeBottom: string,
     voiceType: string,
     castingNotes: string,
     description: string,
     ethnicity: string,
     play: {
     },
     }],
     songs: [{
     id: number,
     uuid: string,
     playId: number,
     name: string,
     website: string,
     songDuration: string,
     scoreNumber: string,
     description: string,
     play: {
     },
     }],
     orchestrations: [{
     id: number,
     uuid: string,
     playId: string,
     orchestraName: string,
     orchestraSize: string,
     orchestraDescription: string,
     }],
     contributions: [{
     id: number,
     uuid: string,
     playId: number,
     artistId: number,
     contributionType: string,
     contributionName: string,
     award: string,
     play: {
     },
     artist: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     }],
     featuredProductions: [{
     }],
     featuredArtistContributions: [{
     }],
     },
     venue: {
     },
     contributions: [{
     id: number,
     uuid: string,
     productionId: number,
     artistId: number,
     contributionType: string,
     contributionName: string,
     award: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     production: {
     },
     artist: {
     id: number,
     uuid: string,
     firstName: string,
     lastName: string,
     dob: string($date-time),
     bio: string,
     hometown: string,
     homeState: string,
     homeCountry: string,
     unionAffiliation: string,
     professionalName: string,
     awards: [string],
     resourceLocation: string,
     website: string,
     createdAt: string($date-time),
     updatedAt: string($date-time),
     playContributions: {
     },
     productionContributions: {
     },
     },
     }],
     featuredArtistContributions: [{
         
     }],
     }],
     };

     console.log(Venue)