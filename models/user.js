
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('Users', {

		// General informations

		Id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true
		},

		// Sports (24)

		Running:              DataTypes.BOOLEAN,
		Hiking:               DataTypes.BOOLEAN,
		InlineSkating:        DataTypes.BOOLEAN,
		MountainBiking:       DataTypes.BOOLEAN,
		FitnessCenter:        DataTypes.BOOLEAN,
		HorsebackRiding:      DataTypes.BOOLEAN,
		Polo:                 DataTypes.BOOLEAN,
		Teamsports:           DataTypes.BOOLEAN,
		Badminton:            DataTypes.BOOLEAN,
		Tennis:               DataTypes.BOOLEAN,
		Golf:                 DataTypes.BOOLEAN,
		Swimming:             DataTypes.BOOLEAN,
		Triathlon:            DataTypes.BOOLEAN,
		MartialArts:          DataTypes.BOOLEAN,
		Paintball:            DataTypes.BOOLEAN,
		RockClimbing:         DataTypes.BOOLEAN,
		Diving:               DataTypes.BOOLEAN,
		Hunting:              DataTypes.BOOLEAN,
		Dancing:              DataTypes.BOOLEAN,
		Billiard:             DataTypes.BOOLEAN,
		Pilates:              DataTypes.BOOLEAN,
		Yoga:                 DataTypes.BOOLEAN,
		CarRacing:            DataTypes.BOOLEAN,
		Watersports:          DataTypes.BOOLEAN,
		Wintersports:         DataTypes.BOOLEAN,

		// Socializing (18)

		GoingOutTogether:     DataTypes.BOOLEAN,
		GoingForDrinks:       DataTypes.BOOLEAN,
		Dinners:              DataTypes.BOOLEAN,
		Clubbing:             DataTypes.BOOLEAN,
		Dancing:              DataTypes.BOOLEAN,
		Musicals:             DataTypes.BOOLEAN,
		Concerts:             DataTypes.BOOLEAN,
		Opera:                DataTypes.BOOLEAN,
		ComedyClub:           DataTypes.BOOLEAN,
		Museum:               DataTypes.BOOLEAN,
		Movies:               DataTypes.BOOLEAN,
		ArtGallerie:          DataTypes.BOOLEAN,
		BallEscors:           DataTypes.BOOLEAN,
		BBQ:                  DataTypes.BOOLEAN,
		Picnic:               DataTypes.BOOLEAN,
		WeddingEscort:        DataTypes.BOOLEAN,
		WatchingSport:        DataTypes.BOOLEAN,
		EveningEvent:         DataTypes.BOOLEAN,
		GoingForAWalk:        DataTypes.BOOLEAN,

		// Romance (9)

		GettingMessages:      DataTypes.BOOLEAN,
		Cuddling:             DataTypes.BOOLEAN,
		WatchingDVD:          DataTypes.BOOLEAN,
		DeepConversations:    DataTypes.BOOLEAN,
		Texting:              DataTypes.BOOLEAN,
		Calling:              DataTypes.BOOLEAN,
		BookReading:          DataTypes.BOOLEAN,
		WatchingTV:           DataTypes.BOOLEAN,
		BeingSpoiled:         DataTypes.BOOLEAN,
		Gifts:                DataTypes.BOOLEAN,

		//Leisure (8)

		Wellness:             DataTypes.BOOLEAN,
		WalkingDog:           DataTypes.BOOLEAN,
		Travelling:           DataTypes.BOOLEAN,
		Shopping:             DataTypes.BOOLEAN,
		PlayingCards:         DataTypes.BOOLEAN,
		PlayingChess:         DataTypes.BOOLEAN,
		Church:               DataTypes.BOOLEAN,
		WashingCars:          DataTypes.BOOLEAN,

		// BUB (5)

		Ironing:              DataTypes.BOOLEAN,
		Cooking:              DataTypes.BOOLEAN,
		WashingClothes:       DataTypes.BOOLEAN,
		HandyWork:            DataTypes.BOOLEAN,
		TechnicalSupport:     DataTypes.BOOLEAN,

		// Last Breakup (5)

		LastBreakup:          DataTypes.INTEGER, // value between 0-4

		// Breakup Reason (24)

		BreakupReason:        DataTypes.INTEGER, // value between 0-23

		// Who's fault

		Fault:                DataTypes.BOOLEAN // 1 --> this person; 0 --> other person

	});

	return User;

}


