Object.assign(window.search, {"doc_urls":["../index.html#物理学入門","chapter_0.html#物理量と単位","chapter_1.html#物理学における研究法","chapter_2.html#単位と単位系","chapter_3.html#長さの単位","chapter_4.html#時間の単位","chapter_5.html#重力質量とその単位","chapter_6.html#単位の変換と次元","chapter_7.html#量の間の関係式"],"index":{"documentStore":{"docInfo":{"0":{"body":8,"breadcrumbs":0,"title":0},"1":{"body":20,"breadcrumbs":0,"title":0},"2":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":45,"breadcrumbs":0,"title":0},"4":{"body":44,"breadcrumbs":0,"title":0},"5":{"body":10,"breadcrumbs":0,"title":0},"6":{"body":0,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":0,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"mdbook build --dest-dir docs このテキストは、初めて物理学を学ばれる方に向けて作成したものです。 すべての学問は共通して、幾千もの先人たちの試行錯誤により成り立っています。ただ、ここに出てくる先人たちというのも元は何も知らない状態から始めていたので、今から学ぶ私たちも同じように そのため、内容も先人たちが何も知らない状態（初学者）から理論を構築したのか、その歴史的な背景を述べた上で解説する形をとっております。読者の皆様には、各々に応じた使い方をしていただければと考えております。 その中でも物理学は物について理論的に取り扱う学問となっています。最古の文明とされているエジプト文明、メソポタミア文明において、天文学を用いた形跡が残っている。このとき、太陽や月の運動がどうしてそのようになっているのかを考察する動きが大きくなり、天動説や地動説といった説がでるようになりました。やがて、１６世期には天体を観測する技術が発達し、ガリレオやケプラーなどによって天体の動きの法則性を数多く発見し、それらを踏まえてニュートンは運動の法則を提出するに至りました。オイラーも力学の法則を運動方程式というに直し、ラグランジュが抗力を抜きにして運動方程式を再構築し、ハミルトンが拡張したことで解析力学という分野が誕生しました。その後、電磁気学との整合のために相対性理論が誕生した。 このように、物理学の歴史を振り返ると一つの物語のような形で理解できることが分かります。 全体の構成は以下の通りとなっております。 a.歴史編…理論が構築される過程を説明（付録には科学者の詳細を記載する） b.解説編…歴史編で登場する論文や実験の解説 c.演習編…内容の理解度をはかるためのもの もし、講義で使用したいと思わている方はaとbをもとに自分なりの講義ノートを作成させるのが最善策だと思います（他人が書いたものだと誤解や間違いが起きやすいため、翻訳の間違いみたいなことが起こる）。 1.古典物理学…量子論以前の物理学（最も身近な物理学） 2.現代物理学…量子論以降の物理学（現在までに創始した分野について） 3.応用物理学…1と2を統合して実際に自然現象を理論的に説明するもの","breadcrumbs":"物理学入門 » 物理学入門","id":"0","title":"物理学入門"},"1":{"body":"$$ \\frac{\\partial u}{\\partial t} = \\alpha \\nabla ^2 u \\label{a}\\tag{1} $$ (\\ref{a}) は熱拡散方程式です。 \\begin{equation} \\frac{\\partial u}{\\partial t} = \\alpha \\nabla ^2 u \\label{b}\\tag{2} \\end{equation} (\\ref{b}) も熱拡散方程式です。","breadcrumbs":"物理量と単位 » 物理量と単位","id":"1","title":"物理量と単位"},"2":{"body":"物理学では自然界におけるいろいろな現象を取り扱うが、その扱い方に特徴がある。すなわち、まず現象を分析してその中から大きさの考えられる要素を抜き出す。そして現象をこの要素の間の数量的関係として表す。例えば、空中に弧を描いて飛んでいるボールの運動という現象は、これをボールに与えられた”力”、これに働く”重力”、ボールの”速度”、”位置”、飛んでいる”時間”というように全て大きさの考えられる要素間の関係として捉える。このように大きさの考えられる要素を物理量あるいは単に量という。そして物理法則は一般に物理量の間の数量的関係として表される。物理量の中には例えば体積のように、その大きさだけしか考えられないもの、また力のように、その強弱（大きさ）の他に方向も合わせ考えなければなければならないものなどがあるが、いずれも物理量であることに変わりない。 さて、一つの物理量を扱うには、まずその性格をはっきさせた上で、その大きさを決めるための物理的な方法を規定しなければならない。例えば、物体の重さという量を考えられるときに、その重さを単に手の上に乗せた時の我々の感じで決めるとすることはできない。なぜかといえば、感覚はそれほど精密でもなく、またそれほど信頼のおけるものでもないからである。どうしても何か基準となるはかりのようものを考え、はかりに現れる目盛りによって重さを表すというようなものを考え、はかりに現れる目盛りによって重さを表すというような方法によらなければならない。 ところで、実際に自然界に起こっている現象というのは、これら多くの物理量が互いに関連しあい、複雑にからみあったものである。この中からある要素だけを単独に他と切り離して取り出すことは実際にはできない。例えば物体の運動に関して距離・時間・質量・力などの物理量を考え、この中から例えば時間という量を決める手段を考えてみよう。 我々には時間の大きさは直感的にはわからない。直感的に大小のわかるのは長さあるいは角度のような1次元の空間的広がりを持つ量についてであるから、時間の測定を長さあるいは角度の測定に転換する必要がある。そしてそれには一定の速さで動くと考えられるものを必要とする。しかしそれが一定の速度をもつことを知るためにはその前に運動に関する法則を知る必要があるが、まだ時間の決め方が確定していない以上その運動というものが決められるべきものでない。このように。ある一つの量を定義するにはその前に他の量を定義しておく必要が起こり、この第2の量を定義するのに第1の量が関連してくる、という循環的な関係が生ずる。 この関係は、非常に数多くの未知数を持つ複雑な連立方程式の解を求めるときの事情に似ている。極めて多元で高次の方程式を解くとき、正攻法で各未知数を順次に求めることはできない。こういう場合、我々は視察によって解くという方法を用いる。 すなわち、まず数個の未知数に予想される数値を仮に与え、他の未知数はこれから求める。そして次にこれらが全ての連立方程式を果たして満足するか否かを調べる。もし満足しなければ最初の予想値を修正する。こうして略値から漸近的に正しい答えに向かうのである。 これを上の運動の例で言えば、地球が等速回転しているものと想像して、これから時間の大きさの決め方を規定する。一方ではまた適当な予想を許すことによって質量や力などの量の決め方を定め。運動の法則を導く。そして、この運動の法則を基礎として地球の自転運動を論じ、これが等速回転運動であることが証明されれば最初の予想に過ちが無かったことになるのである。このようなわけで、物理量はまず最初にはっきりした定義を与え、明確な測定方法で一つ一つ順次に規定していくというわけにはいかない。どうしても、ある仮定を設けて進み、訂正を行いつつ全体としてみた時にそこに矛盾がないように決めるという方法に頼らざるを得ない。ことに力学の最初の部分などにおいて、個々の量の決め方に論理的な必然性を欠くところがあるが、これらの量は全体の関連において定義され、理解されるべきものである。 以上のことは法則を導く場合でも同様である。我々が数個の要素の間の関係を知ろうとして実験しても、実際には必ずほかの要素が不可逆的に混入してくる。しかし我々はこの実験結果から混入要素を除いた時の結果を想像して、これから与えられる要素間の関係すなわり法則を帰納する。このように、物理学における研究方法は帰納的であって演繹的ではない。したがって仮に現在完全と思われる物理学の体系があったとしても、将来の新事実が果たしてこの中に矛盾なく収まるかどうかは保証できない。入らなければ体系を作り変える。こうして次第に完全な体系へ向かわせようというのが物理学の研究方法である。","breadcrumbs":"物理量と単位 » 物理学における研究法 » 物理学における研究法","id":"2","title":"物理学における研究法"},"3":{"body":"一つの物理量を表すのには、まずその基準となる大きさの量すなわち単位を適当に選び、その物理学がこの単位の何倍（数値）にあたるか示せばよい。すなわち \\[ 物理量=数値\\times単位 \\] の関係で表すことができる。 さて、単位はそれぞれの物理量に対して決めるべきものであるから、それぞれ任意に選ぶことができる。例えば、長さと面積とは本来別種の量であるから別々に単位を決めて悪いことはないが、ある関係を持たせて決める方が現象を数量関係として表す場合に簡単になる。例えば長さの単位を任意に決めたら、面積の単位はこの長さの一辺とする正方形の面積と決める。また体積の単位としては単位長さの一辺とする立方体の体積をとり、さらに長さと時間の単位を適当に決めたら、速さの単位は単位時間に単位の長さ進む速さと決める。このように、最初まったく適宜に決めた単位を基本単位、これから導かれた単位を組立単位という。問題は物理量全体を取り扱うのに何個の基本単位が必要かということであるが、力学的現象を扱う範囲内でいえば3個の基本単位が必要で、またそれだけあれば十分である。このことは実際にあたってみれば容易に理解されるであろう。基本単位はそれが絶対不変であると信じられるものでなければならない。そしてこの条件を満たすものとして長さ・質量・時間の3個が選ばれている。このようにして長さ・質量・時間の基本単位およびそれから導かれる組立単位の全体を 絶対単位系 という。 なお、質量については後に詳しく述べるが、一定の質量のものであれば、それに働く重力も一定不変と考えられる。ただ重力はこれを測る地点によって多少の相違があるので、場所を指定してこれに働く重力をとれば、その力を基本単位に選ぶこともできる。このようにして長さ・力・時間の3個を基本単位として単位系が重力単位系である。 物理学で取り扱う量は膨大なものから極微のものに至る。長さで言えば、天文学的の距離から原子的な長さまである。そこで一つの単位に対して副単位を考えておくと便利である。実際に用いられている副単位は基本単位名に以下のような接頭語をつけて呼ぶ。例えば nm は nanometerで \\( 10^{-9} \\) m を意味し、Tg は teragram で \\( 10^{12} \\) g のことである。 基本単位に対する倍数 呼び方 記号 \\( 10^{12} \\) tera T \\( 10^{9} \\) giga G \\( 10^{6} \\) mega M \\( 10^{3} \\) kiro K \\( 10^{-1} \\) deci d \\( 10^{-2} \\) centi c \\( 10^{-3} \\) milli m \\( 10^{-6} \\) micro μ \\( 10^{-9} \\) nano n \\( 10^{-12} \\) pico p","breadcrumbs":"物理量と単位 » 単位と単位系 » 単位と単位系","id":"3","title":"単位と単位系"},"4":{"body":"長さはもともと点の相対的位置を表すための量で、二つの長さはこれらを重ね合わせることによって直感的にその大きさを判定することができる。長さがあらゆる物理量の中での最も基礎的なものになっている理由はここにある。そして他の物理量も、これを正確に知るためには長さの測定によることが非常に多い。例えば、時間は時計の針の動いた距離で、物体の重さははかりの目盛りで温度は水銀柱の長さで測るなどがこれである。 長さの単位として物理学で用いられているものはメートルであるが、このメートルが最初測定されたのはフランスで1795年のことである。そして地球子午線の全長の4000万分の1の長さをもって単位とするというのが最初の考えであった。これにしたがって子午線の実測を行い、その後、幾多の経緯を経た後に1875年に至って初めて国際的にメートル条約ができ、メートル原器というものが制定された。このメートル原器は特殊の切り口（これは曲がりにくくするため）をもち、白金90％、イリジウム10％の合金で作られた棒で、その両端に近いところそれぞれ細い標線がある。0℃におけるこの標線間の長さが1m と決められた。この国際原器はパリ郊外の国際度量衡局に保管され、各国はこれとほとんど同じもの（副原器）を保管することとなった。それぞれ多少の誤差は免れ難く、我が国に配布されたものでは、標線間の長さは \\[ 1{\\rm m}-\\left(1.3-8.667t-0.00100t^2 \\right)\\mu \\] であった。ただし \\( t \\) は温度（℃）を、\\( \\mu \\) はミクロン（micron）で \\( 10^{-6} \\) m である。 このようにして決定されたメートル原器にもいろいろ難点がある・まず第１は永久不変性の問題で、人工的なものである以上、破損の危険がないとは言えないし、またこのような合金製のものが長年月の間にひとりでに変形しないとは保証できない。しかもそれ以上の欠点とされるのは精度である。原器の両端にある標線は細い線であるが、それでも幅が \\( 6~8\\mu \\) 程度である。そこで両線の中心を採ったとしても全長に \\( 0.2\\mu \\) 程度の誤差は免れ得ない。すなわち、相対誤差 \\( 2\\times 10^{-7} \\) の精度しかなく、これでは進歩した現代の精密科学の要求を満足してくれない。そこで、永久不変性という意味で、ある決まった光の波長を長さの基準にするという考えが20世紀初頭からあった。そして、 Cd 蒸気中における放電の場合に発する赤色光をこのために用いるという提案がなされたこともある。 光の波長を基準にするというのは \"外から何らかの影響を受けていない静止した同一種の原子の出す光の波長は定まっている\" [1] という考えに基づくものである。しかし現実には、元素が同位体の集合であって、完全に同一種の原子の集合でないこと、原子同士が互いに影響しあっていること、これを光らせるために電気的影響を受けていること、原子が前後左右に振動しているために、その発する光が例え一定でもDoppler効果によって異なった波長の光の混合として観測されること、などその他いろいろの理由で純粋に波長が一定した光というものが得られなかった。 その後の研究によって\\( {}^{86} \\)Kr [2] という同位体が分離されるようになり、理想に近い光が得られるようになった。そして1960年10月14日の国際度量衡総会で、今後長さの単位として\\( {}^{86} \\)Kr の発するKr66橙色線の波長を用いることが決定され、わが国でも1961年7月1日からこれによるということが政令で決められた。 以下の図はこの\\( {}^{86} \\)Kr ランプの要点を示したもので、Vは熱陰極を持った真空管で、この中に少量の\\( {}^{86} \\)Kr が封入され、放電によって得る光の波長はBの方向から分光器で観測する。Vを液体窒素Nの中に入れ、この窒素はポンプで減圧し、Nの温度が（63±1）°Kの範囲になるようにして用いる。 Kr86ランプ \\( {}^{86} \\)Kr の低温低圧における発光を用いたのは、上に述べた種々の障害を少なくするためで、放電電流にも一定の限度が与えられている。 こうして出てくる光の中のいわゆる Kr86 橙色線の真空中における波長の1650763.73倍を 1 m と定義する。もちろん従来の 1 m とほとんど違いはない。 この方法は極めて精度の高いもので、メートル原器の精度が\\( 2\\times 10^{-7} \\)であったのに、ここでは\\( 10^{-8} \\)の精度が得られ、将来は\\( 10^{-9} \\)の精度にまで上げられる見込みである。 数個の飛び飛びの波長の光の混合でるから、その中の一つを選ぶ。 もともとKrの中には質量数、78、80、82、83、84、86の同位体が含まれている。","breadcrumbs":"物理量と単位 » 長さの単位 » 長さの単位","id":"4","title":"長さの単位"},"5":{"body":"我々には時の経過したことは分かるが、経過した時間の量は精密には分からない。そこで、一定の周期をもつと想像されるもの、あるいは等速運動をすると想像されるものを仮定して時間を測る。そしてこの想像が果たして正しかったかどうかは、これから出発して作られル物理学の体系を全体的に見て判定する。 それにしても、ある一定の時間、すなわち単位を決めなければならないが、最初の一定の時間として採用されたものは地球の自転から割り出したものであった。いま、地球の中心を中心としてきわめて大きな半径の球面を天空に想像し、全ての星をこの天球上に投影してみる。地球の自転を考慮しないことにすれば、全ての恒星はほぼ天球上の固定点となるが、太陽はこの天球上を運動する。それは地球が太陽の周りに公転しているからである。 天球 この太陽の軌道 VDACV を黄道という。地球は太陽の周りに一定の角速度で運行しているわけではないから、黄道上の太陽の速さも一定ではない。また地軸はこの黄道面（すなわち地球の公転軌道の平面）に垂直になっていない。したがって、地球の自転角速度が一定としても、１日の長さ、すなわち太陽が南中してから翌日南中するまでの時間は四季によって変わってくる。 そこで、地球の中心を通り、地軸に垂直な平面と天球との交線 EW を赤道と名づけ、この赤道上を一定の速さで動く仮想的な太陽を想像して、これを平均太陽と名付ける。赤道と黄道との交点 V, A の中で、太陽が南半球から北半球へ移る方の点 V を春分点、他の点 A を秋分点という。平均太陽の運動の速さは、真太陽と同時に春分点を出発して、翌年同時に春分点に戻るような速さと決められている。実は地軸が一定の方向を保たず、きわめて徐々にこまのようなすりこぎ運動をしているので、赤道面の方法は徐々に変わり、春分点も多少移動していく。春分点を出て再び春分点に戻るまでの時間は、厳密に太陽が天球上を１周する時間よりやや短く、これを 1太陽年（あるいは 1回帰年）という。 それはとにかく、平均太陽は赤道上を一定の速さで動いているので、もし地球の自転の速さが一定ならば、平均太陽が今日南中してから、翌日南中するまでの時間は一定となるはずである。この時間を1日、その 1/24 を 1時間と定義する。 [1] 以上が従来の時間の単位で、これは地球自転が一定不変の速さという仮定に基づいている。しかし。このようにして決めた今までの時間を用いると、地球から見た月の運動が計算から予想されるところと違い、永年の中には次第に早くなっていく傾向のあることが分かった。地球に万有引力をおよぼしているものは太陽の他に惑星もある。このために地球は太陽の周りに正確な長円運動をするのでなくて、きわめて僅かずつであるが、軌道の形が円形に近づいていく。月のみかけの運動が計算と合わない一つの原因がここにあるが、それだけでは計算の違いが十分説明できない。このようなことから、地球自転速度が一定という仮定にはかなり以前から疑いが持たれていた。近年、時計が非常に進歩し、ことに水晶時計が発達し、時間の測定がきわめて精密に行われるようになるにつれてこの疑いがますます濃くなってきた。 日本では統計 135° の地点すなわち明石市を通る子午線を基準に選んでいる。そこで、平均太陽は正午に明石市で南中するが、真太陽は必ずしもそうでない。","breadcrumbs":"物理量と単位 » 時間の単位 » 時間の単位","id":"5","title":"時間の単位"},"6":{"body":"","breadcrumbs":"物理量と単位 » 重力質量とその単位 » 重力質量とその単位","id":"6","title":"重力質量とその単位"},"7":{"body":"","breadcrumbs":"物理量と単位 » 単位の変換と次元 » 単位の変換と次元","id":"7","title":"単位の変換と次元"},"8":{"body":"","breadcrumbs":"物理量と単位 » 量の間の関係式 » 量の間の関係式","id":"8","title":"量の間の関係式"}},"length":9,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{"0":{"0":{"1":{"0":{"0":{"df":0,"docs":{},"t":{"^":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"\\":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"/":{"2":{"4":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"^":{"df":0,"docs":{},"{":{"1":{"2":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}}},"9":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":2,"docs":{"3":{"tf":2.6457513110645907},"4":{"tf":2.23606797749979}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"3":{"5":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"6":{"5":{"0":{"7":{"6":{"3":{".":{"7":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":4,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":2.0}},"{":{"\\":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"2":{"\\":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":3,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}},"~":{"8":{"\\":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"7":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"8":{".":{"6":{"6":{"7":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"df":1,"docs":{"4":{"tf":1.0}}},"9":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"b":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"{":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"d":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"{":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"5":{"tf":1.0}}}},"f":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"{":{"\\":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"k":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"8":{"6":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":2.23606797749979}}}},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"}":{"\\":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"{":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"}":{"\\":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"{":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"(":{"1":{".":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"m":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":2.0}},"e":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":1,"docs":{"4":{"tf":1.0}}}},"n":{"a":{"b":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":1,"docs":{"3":{"tf":1.0}},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"p":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"{":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{")":{"\\":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"t":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"3":{"tf":1.0}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"g":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"}":{"df":0,"docs":{},"{":{"\\":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"d":{"a":{"c":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"breadcrumbs":{"root":{"0":{".":{"0":{"0":{"1":{"0":{"0":{"df":0,"docs":{},"t":{"^":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"\\":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"/":{"2":{"4":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"^":{"df":0,"docs":{},"{":{"1":{"2":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}}},"9":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":2,"docs":{"3":{"tf":2.6457513110645907},"4":{"tf":2.23606797749979}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"3":{"5":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"6":{"5":{"0":{"7":{"6":{"3":{".":{"7":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":4,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":2.0}},"{":{"\\":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"2":{"\\":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":3,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}},"~":{"8":{"\\":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"7":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"8":{".":{"6":{"6":{"7":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"df":1,"docs":{"4":{"tf":1.0}}},"9":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"a":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"b":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"{":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"d":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"{":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"5":{"tf":1.0}}}},"f":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"{":{"\\":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"k":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"8":{"6":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":2.23606797749979}}}},"l":{"a":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"}":{"\\":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"{":{"1":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"}":{"\\":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"{":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"(":{"1":{".":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"m":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":2.0}},"e":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":1,"docs":{"4":{"tf":1.0}}}},"n":{"a":{"b":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":1,"docs":{"3":{"tf":1.0}},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"p":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"{":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{")":{"\\":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"t":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"3":{"tf":1.0}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"g":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"}":{"df":0,"docs":{},"{":{"\\":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"d":{"a":{"c":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"title":{"root":{"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});