module.exports = function(parseObject) {
	var categories = {};

	categories.sports =  {
		Running:              parseObject.Running || false,
		Hiking:               parseObject.Hiking || false,
		InlineSkating:        parseObject.InlineSkating || false,
		MountainBiking:       parseObject.MountainBiking || false,
		FitnessCenter:        parseObject.FitnessCenter || false,
		HorsebackRiding:      parseObject.HorsebackRiding || false,
		Polo:                 parseObject.Polo || false,
		Teamsports:           parseObject.Teamsports || false,
		Badminton:            parseObject.Badminton || false,
		Tennis:               parseObject.Tennis || false,
		Golf:                 parseObject.Golf || false,
		Swimming:             parseObject.Swimming || false,
		Triathlon:            parseObject.Triathlon || false,
		MartialArts:          parseObject.MartialArts || false,
		Paintball:            parseObject.Paintball || false,
		RockClimbing:         parseObject.RockClimbing || false,
		Diving:               parseObject.Diving || false,
		Hunting:              parseObject.Hunting || false,
		ProfessionalDancing:  parseObject.Dancing || false,
		Billiard:             parseObject.Billiard || false,
		Pilates:              parseObject.Pilates || false,
		Yoga:                 parseObject.Yoga || false,
		CarRacing:            parseObject.CarRacing || false,
		Watersports:          parseObject.Watersports || false,
		Wintersports:         parseObject.Wintersports || false
	};

	categories.social =  {
		GoingOutTogether:     parseObject.GoingOutTogether || false,
		GoingForDrinks:       parseObject.GoingForDrinks || false,
		Dinners:              parseObject.Dinners || false,
		Clubbing:             parseObject.Clubbing || false,
		Dancing:              parseObject.Dancing || false,
		Musicals:             parseObject.Musicals || false,
		Concerts:             parseObject.Concerts || false,
		Opera:                parseObject.Opera || false,
		ComedyClub:           parseObject.ComedyClub || false,
		Museum:               parseObject.Museum || false,
		Movies:               parseObject.Movies || false,
		ArtGallerie:          parseObject.ArtGallerie || false,
		BallEscorts:          parseObject.BallEscorts || false,
		BBQ:                  parseObject.BBQ || false,
		Picnic:               parseObject.Picnic || false,
		WeddingEscort:        parseObject.WeddingEscort || false,
		WatchingSport:        parseObject.WatchingSport || false,
		EveningEvent:         parseObject.EveningEvent || false,
		GoingForAWalk:        parseObject.GoingForAWalk || false
	};

	categories.romance = {
		GettingMessages:      parseObject.GettingMessages || false,
		Cuddling:             parseObject.Cuddling || false,
		WatchingDVD:          parseObject.WatchingDVD || false,
		DeepConversations:    parseObject.DeepConversations || false,
		Texting:              parseObject.Texting || false,
		Calling:              parseObject.Calling || false,
		BookReading:          parseObject.BookReading || false,
		WatchingTV:           parseObject.WatchingTV || false,
		BeingSpoiled:         parseObject.BeingSpoiled || false,
		Gifts:                parseObject.Gifts || false
	};

	categories.leisure = {
		Wellness:             parseObject.Wellness || false,
		WalkingDog:           parseObject.WalkingDog || false,
		Travelling:           parseObject.Travelling || false,
		Shopping:             parseObject.Shopping || false,
		PlayingCards:         parseObject.PlayingCards || false,
		PlayingChess:         parseObject.PlayingChess || false,
		Church:               parseObject.Church || false,
		WashingCars:          parseObject.WashingCars || false
	};

	categories.bub = {
		Ironing:              parseObject.Ironing || false,
		Cooking:              parseObject.Cooking || false,
		WashingClothes:       parseObject.WashingClothes || false,
		HandyWork:            parseObject.HandyWork || false,
		TechnicalSupport:     parseObject.TechnicalSupport || false
	};

	categories.LastBreakup = parseObject.LastBreakup || 0;
	categories.BreakupReason = parseObject.BreakupReason || 0;
	categories.Fault = parseObject.Fault || false;

	return categories;
}

