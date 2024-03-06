interface IBook {
    name: string;
    image: string;
    chapters: string[];
    characters: string[];
}

interface IAuthor {
    name: string;
    profileImage: string;
    books: IBook[];
}

export enum NUMOFAUTHOR {
    "J.K.Rowling",
    "J.R.R.Tolkien",
}

export const LOGOS = [
    "/resources/images/logo/HarryPoter_Logo.png",
    "/resources/images/logo/LoadOfRing.png",
];

export const AUTHORS: IAuthor[] = [
    {
        name: "J.K.Rowling",
        profileImage: "/resources/images/author/J.K.Rowling.png",
        books: [
            {
                name: "Harry Potter and the Philosopher's Stone",
                image: "/resources/images/book/HarryPoter_Book1.png",
                chapters: [
                    "The Boy Who Lived",
                    "The Vanishing Glass",
                    "The Letters from No One",
                    "The Keeper of the Keys",
                    "Diagon Alley",
                    "The Journey from Platform Nine and Three-Quarters",
                    "The Sorting Hat",
                    "The Potions Master",
                    "The Midnight Duel",
                    "Halloween",
                    "Quidditch",
                    "The Mirror of Erised",
                    "Nicholas Flamel",
                    "Norbert The Norwegian Ridgeback",
                    "The Forbidden Forest",
                    "Through the Trapdoor",
                    "The Man with Two Faces",
                ],
                characters: [
                    "제임스 포터",
                    "릴리 에반스",
                    "시리우스 블랙",
                    "리머스 루핀",
                    "피터 페티그루",
                    "해리 포터",
                    "론 위즐리",
                    "헤르미온느 그레인저",
                    "프레드 위즐리",
                    "조지 위즐리",
                    "퍼시 위즐리",
                    "지니 위즐리",
                    "찰리 위즐리",
                    "빌 위즐리",
                    "아서 위즐리",
                    "몰리 프루잇",
                    "네빌 롱보텀",
                    "셰이머스 피니건",
                    "딘 토머스",
                    "파르바티 파틸",
                    "라벤더 브라운",
                    "앤젤리나 존슨",
                    "콜린 크리비",
                    "데니스 크리비",
                    "케이티 벨",
                    "리 조던",
                    "코맥 매클래건",
                    "올리버 우드",
                    "로밀다 베인",
                    "나이젤 월퍼트",
                    "얼리샤 스피넛",
                    "릴리 루나 포터",
                    "제임스 시리우스 포터",
                    "알버스 덤블도어",
                    "미네르바 맥고나걸",
                    "루비우스 해그리드",
                    "세드릭 디고리",
                    "어니 맥밀런",
                    "해너 애벗",
                    "저스틴 핀치플레츨리",
                    "수전 본즈",
                    "재커라이어스 스미스",
                    "리앤",
                    "에드워드 루핀",
                    "포모나 스프라우트",
                    "님파도라 통스",
                    "뉴트 스캐맨더",
                    "루나 러브굿",
                    "초 챙",
                    "매리에타 에지콤",
                    "페넬러피 클리어워터",
                    "파드마 파틸",
                    "마이클 코너",
                    "로저 데이비스",
                    "앤서니 골드스틴",
                    "S. 포셋",
                    "테리 부트",
                    "마커스 벨비",
                    "길더로이 록하트",
                    "퀴리누스 퀴럴",
                    "필리우스 플리트윅",
                    "시빌 트릴로니",
                    "드레이코 말포이",
                    "빈센트 크래브",
                    "그레고리 고일",
                    "팬지 파킨슨",
                    "시어도어 노트",
                    "블레이즈 자비니",
                    "밀리센트 벌스트로드",
                    "마커스 플린트",
                    "다프네 그린그래스",
                    "아스토리아 그린그래스",
                    "알버스 세베루스 포터",
                    "스코피어스 말포이",
                    "톰 마볼로 리들",
                    "아브락사스 말포이",
                    "오리온 블랙",
                    "루시우스 말포이",
                    "벨라트릭스 레스트레인지",
                    "나르시사 말포이",
                    "안드로메다 통스",
                    "알파드 블랙",
                    "세베루스 스네이프",
                    "레귤러스 블랙",
                    "로돌푸스 레스트레인지",
                    "레타 레스트레인지",
                    "발부르가 블랙",
                    "도레아 블랙",
                    "호러스 슬러그혼",
                ],
            },
            {
                name: "Harry Potter and the Chamber of Secrets",
                image: "/resources/images/book/HarryPoter_Book2.png",
                chapters: [
                    "The Worst Birthday",
                    "Dobby's Warning",
                    "The Burrow",
                    "At Flourish and Blotts",
                    "The Whomping Willow",
                    "Gilderoy Lockhart",
                    "Mudbloods and Murmurs",
                    "The Deathday Party",
                    "The Writing on the Wall",
                    "The Rogue Bludger",
                    "The Dueling Club",
                    "The Polyjuice Potion",
                    "The Very Secret Diary",
                    "Cornelius Fudge",
                    "Aragog",
                    "The Chamber of Secrets",
                    "The Heir of Slytherin",
                    "Dobby's Reward",
                ],
                characters: [
                    "제임스 포터",
                    "릴리 에반스",
                    "시리우스 블랙",
                    "리머스 루핀",
                    "피터 페티그루",
                    "해리 포터",
                    "론 위즐리",
                    "헤르미온느 그레인저",
                    "프레드 위즐리",
                    "조지 위즐리",
                    "퍼시 위즐리",
                    "지니 위즐리",
                    "찰리 위즐리",
                    "빌 위즐리",
                    "아서 위즐리",
                    "몰리 프루잇",
                    "네빌 롱보텀",
                    "셰이머스 피니건",
                    "딘 토머스",
                    "파르바티 파틸",
                    "라벤더 브라운",
                    "앤젤리나 존슨",
                    "콜린 크리비",
                    "데니스 크리비",
                    "케이티 벨",
                    "리 조던",
                    "코맥 매클래건",
                    "올리버 우드",
                    "로밀다 베인",
                    "나이젤 월퍼트",
                    "얼리샤 스피넛",
                    "릴리 루나 포터",
                    "제임스 시리우스 포터",
                    "알버스 덤블도어",
                    "미네르바 맥고나걸",
                    "루비우스 해그리드",
                    "세드릭 디고리",
                    "어니 맥밀런",
                    "해너 애벗",
                    "저스틴 핀치플레츨리",
                    "수전 본즈",
                    "재커라이어스 스미스",
                    "리앤",
                    "에드워드 루핀",
                    "포모나 스프라우트",
                    "님파도라 통스",
                    "뉴트 스캐맨더",
                    "루나 러브굿",
                    "초 챙",
                    "매리에타 에지콤",
                    "페넬러피 클리어워터",
                    "파드마 파틸",
                    "마이클 코너",
                    "로저 데이비스",
                    "앤서니 골드스틴",
                    "S. 포셋",
                    "테리 부트",
                    "마커스 벨비",
                    "길더로이 록하트",
                    "퀴리누스 퀴럴",
                    "필리우스 플리트윅",
                    "시빌 트릴로니",
                    "드레이코 말포이",
                    "빈센트 크래브",
                    "그레고리 고일",
                    "팬지 파킨슨",
                    "시어도어 노트",
                    "블레이즈 자비니",
                    "밀리센트 벌스트로드",
                    "마커스 플린트",
                    "다프네 그린그래스",
                    "아스토리아 그린그래스",
                    "알버스 세베루스 포터",
                    "스코피어스 말포이",
                    "톰 마볼로 리들",
                    "아브락사스 말포이",
                    "오리온 블랙",
                    "루시우스 말포이",
                    "벨라트릭스 레스트레인지",
                    "나르시사 말포이",
                    "안드로메다 통스",
                    "알파드 블랙",
                    "세베루스 스네이프",
                    "레귤러스 블랙",
                    "로돌푸스 레스트레인지",
                    "레타 레스트레인지",
                    "발부르가 블랙",
                    "도레아 블랙",
                    "호러스 슬러그혼",
                ],
            },
        ],
    },
    {
        name: "J.R.R.Tolkien",
        profileImage: "/resources/images/author/J.R.R.Tolkien.png",
        books: [
            {
                name: "The Fellowship of the Ring",
                image: "/resources/images/book/The Fellowship of the Ring.png",
                chapters: [
                    "A Long-expected Party",
                    "The Shadow of the Past",
                    "Three is Company",
                    "A Short Cut to Mushrooms",
                    "A Conspiracy Unmasked",
                    "The Old Forest",
                    "In the House of Tom Bombadil",
                    "Fog on the Barrow-downs",
                    "At the Sign of the Prancing Pony",
                    "Strider",
                    "A Knife in the Dark",
                    "Flight to the Ford",
                    "Many Meetings",
                    "The Council of Elrond",
                    "The Ring goes South",
                    "A Journey in the Dark",
                    "The Bridge of Khazad-dûm",
                    "Lothlórien",
                    "The Mirror of Galadriel",
                    "Farewell to Lórien",
                    "The Great River",
                    "The Breaking of the Fellowship",
                ],
                characters: [
                    "갈라드리엘",
                    "글로르핀델",
                    "길갈라드",
                    "레골라스",
                    "아르웬",
                    "에레스토르",
                    "엘론드",
                    "켈레보른",
                    "키르단",
                    "할디르",
                    "간부리간",
                    "그리마",
                    "데네소르 2세",
                    "베레곤드",
                    "보로미르",
                    "세오덴",
                    "아라고른 2세",
                    "에르켄브란드",
                    "에오메르",
                    "에오윈",
                    "엘렌딜",
                    "이실두르",
                    "임라힐",
                    "파라미르",
                    "할바라드",
                    "글로인",
                    "김리",
                    "나무수염",
                    "브레갈라드",
                    "가인 엘라노르",
                    "감지네 샘와이즈",
                    "강노루 집안 메리아독",
                    "골목쟁이네 프로도",
                    "골룸",
                    "골목쟁이네 빌보",
                    "툭 집안 페레그린",
                    "간달프",
                    "두린의 재앙",
                    "라다가스트",
                    "사우론",
                    "나즈굴",
                    "앙마르의 마술사왕",
                    "카물",
                    "러츠",
                    "사루만",
                    "사우론의 입",
                    "쉴로브",
                    "우글룩",
                    "톰 봄바딜",
                    "물 속의 감시자",
                ],
            },
            {
                name: "The Two Towers",
                image: "/resources/images/book/The Two Towers.png",
                chapters: [
                    "The Departure of Boromir",
                    "The Riders of Rohan",
                    "The Uruk-hai",
                    "Treebeard",
                    "The White Rider",
                    "The King of the Golden Hall",
                    "Helm's Deep",
                    "The Road to Isengard",
                    "Flotsam and Jetsam",
                    "The Voice of Saruman",
                    "The Palantír",
                    "The Taming of Sméagol",
                    "The Passage of the Marshes",
                    "The Black Gate is Closed",
                    "Of Herbs and Stewed Rabbit",
                    "The Window on the West",
                    "The Forbidden Pool",
                    "Journey to the Cross-Roads",
                    "The Stairs of Cirith Ungol",
                    "Shelob's Lair",
                    "The Choices of Master Samwise",
                ],
                characters: [
                    "갈라드리엘",
                    "글로르핀델",
                    "길갈라드",
                    "레골라스",
                    "아르웬",
                    "에레스토르",
                    "엘론드",
                    "켈레보른",
                    "키르단",
                    "할디르",
                    "간부리간",
                    "그리마",
                    "데네소르 2세",
                    "베레곤드",
                    "보로미르",
                    "세오덴",
                    "아라고른 2세",
                    "에르켄브란드",
                    "에오메르",
                    "에오윈",
                    "엘렌딜",
                    "이실두르",
                    "임라힐",
                    "파라미르",
                    "할바라드",
                    "글로인",
                    "김리",
                    "나무수염",
                    "브레갈라드",
                    "가인 엘라노르",
                    "감지네 샘와이즈",
                    "강노루 집안 메리아독",
                    "골목쟁이네 프로도",
                    "골룸",
                    "골목쟁이네 빌보",
                    "툭 집안 페레그린",
                    "간달프",
                    "두린의 재앙",
                    "라다가스트",
                    "사우론",
                    "나즈굴",
                    "앙마르의 마술사왕",
                    "카물",
                    "러츠",
                    "사루만",
                    "사우론의 입",
                    "쉴로브",
                    "우글룩",
                    "톰 봄바딜",
                    "물 속의 감시자",
                ],
            },
        ],
    },
];
