
CREATE TABLE IF NOT EXISTS "Users" (

    "Id"                   serial         primary key,
    "Running"              boolean,
    "Hiking"               boolean,
    "InlineSkating"        boolean,
    "MountainBiking"       boolean,
    "FitnessCenter"        boolean,
    "HorsebackRiding"      boolean,
    "Polo"                 boolean,
    "Teamsports"           boolean,
    "Badminton"            boolean,
    "Tennis"               boolean,
    "Golf"                 boolean,
    "Swimming"             boolean,
    "Triathlon"            boolean,
    "MartialArts"          boolean,
    "Paintball"            boolean,
    "RockClimbing"         boolean,
    "Diving"               boolean,
    "Hunting"              boolean,
    "ProfessionalDancing"  boolean,
    "Billiard"             boolean,
    "Pilates"              boolean,
    "Yoga"                 boolean,
    "CarRacing"            boolean,
    "Watersports"          boolean,
    "Wintersports"         boolean,

    -- Socializing (18)

    "GoingOutTogether"     boolean,
    "GoingForDrinks"       boolean,
    "Dinners"              boolean,
    "Clubbing"             boolean,
    "Dancing"              boolean,
    "Musicals"             boolean,
    "Concerts"             boolean,
    "Opera"                boolean,
    "ComedyClub"           boolean,
    "Museum"               boolean,
    "Movies"               boolean,
    "ArtGallerie"          boolean,
    "BallEscorts"          boolean,
    "BBQ"                  boolean,
    "Picnic"               boolean,
    "WeddingEscort"        boolean,
    "WatchingSport"        boolean,
    "EveningEvent"         boolean,
    "GoingForAWalk"        boolean,

    -- Romance (9)

    "GettingMessages"      boolean,
    "Cuddling"             boolean,
    "WatchingDVD"          boolean,
    "DeepConversations"    boolean,
    "Texting"              boolean,
    "Calling"              boolean,
    "BookReading"          boolean,
    "WatchingTV"           boolean,
    "BeingSpoiled"         boolean,
    "Gifts"                boolean,

    -- Leisure (8)

    "Wellness"             boolean,
    "WalkingDog"           boolean,
    "Travelling"           boolean,
    "Shopping"             boolean,
    "PlayingCards"         boolean,
    "PlayingChess"         boolean,
    "Church"               boolean,
    "WashingCars"          boolean,

    -- BUB (5)

    "Ironing"              boolean,
    "Cooking"              boolean,
    "WashingClothes"       boolean,
    "HandyWork"            boolean,
    "TechnicalSupport"     boolean,

    -- Last Breakup (5)

    "LastBreakup"          smallint, -- value between 0-4

    -- Breakup Reason (24)

    "BreakupReason"        smallint, -- value between 0-23

    -- Who's fault

    "Fault"                boolean -- 1 --> this person; 0 --> other person

) TABLESPACE tbs_standard;