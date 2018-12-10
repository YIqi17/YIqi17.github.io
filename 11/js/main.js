private static final float IDEAL_FRAME_RATE = 60f;
private static final String RENDER_MODE = P2D;

float defaultTextSizeValue = 24f;
String fontFilePath = "font_1_honokamin_subset.ttf";

ParticleSystem currentParticleSystem;
CharacterParticleGenerateManager manager;


function setup() {
  size(640, 640, RENDER_MODE);
  colorMode(HSB, 360f, 100f, 100f, 100f);
  textFont(createFont(fontFilePath, defaultTextSizeValue, true));

  initialize();
}

function draw() {
  background(0f, 0f, 98f);
  
  manager.run();
  currentParticleSystem.run();
}

function initialize() {
  currentParticleSystem = new ParticleSystem();

  // Text from: http://www.aozora.gr.jp/cards/001529/files/44909_29558.html

  float d = 1f;
  float x = 70f;
  float y = 160f;
  int intervalFrm = 3;
  int life = int(IDEAL_FRAME_RATE * 30f);
  boolean proportionalIndicator = false;
  
  manager = new CharacterParticleGenerateManager()
    .setPosition(x, y)
    .setTextSize(defaultTextSizeValue)
    .setIntervalFrameCount(intervalFrm)
    .setPropotionalIndicator(proportionalIndicator)
    .setLifetime(life)
    ;
  manager
    .setDelaySeconds(d)
    .registerString("冬の陸には林野をおおう深雪を蹴って，")
    .breakLine(1.2f)
    .setDelaySeconds(d+=1.5f)
    .registerString("天地を凍らす寒気を物ともせず\n山又山をふみ越えて熊を狩り，")
    .breakLine(2.4f)
    .setDelaySeconds(d+=3f)
    .registerString("夏の海には涼風泳ぐみどりの波，")
    .breakLine(1.2f)
    .setDelaySeconds(d+=1.5f)
    .registerString("白い鴎の歌を友に木の葉の様な小舟を浮べて\nひねもす魚を漁り，")
    .breakLine(2.4f)
    .setDelaySeconds(d+=3f)
    .registerString("花咲く春は軟らかな陽の光を浴びて")
    .breakLine(1.2f)
    .setDelaySeconds(d+=1.5f)
    .registerString("永久に囀る小鳥と共に歌い暮して蕗とり蓬摘み，")
    .breakLine(1.2f)
    .setDelaySeconds(d+=1.5f)
    .registerString("紅葉の秋は野分に穂揃うすすきをわけて，\n宵まで鮭とる篝も消え，")
    .breakLine(2.4f)
    .setDelaySeconds(d+=3f)
    .registerString("谷間に友呼ぶ鹿の音を外に，円かな月に夢を結ぶ．")
    .breakLine(1.2f)
    .setDelaySeconds(d+=1.5f)
    .registerString("嗚呼なんという楽しい生活でしょう．")
    .breakLine(1.8f)
    .setDelaySeconds(d+=4f)
    .setTextSize(defaultTextSizeValue * 0.7f)
    .setXPosition(x + 100f)
    .registerString("――『アイヌ神謡集』（知里幸惠編訳）より")
    ;
}

void mousePressed() {
  initialize();
}