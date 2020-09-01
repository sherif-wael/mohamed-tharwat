import Layout from "../../components/layout";
import PostWrapper from "../../components/post-wrapper";


export default function Post(){
    return (
        <Layout>
            <PostWrapper>
                <h2><span>تعليمات و نصائح لمرضى الذئبة الحمراء</span></h2>
                <img src="/images/red-wolf.jpeg" alt="systematic lopus erythematic" />
                <h3>:ما هي الذئبة الحمراء</h3>
                <p>هي مرض مناعي من امراض المناعة ال ذاتية، بمعني أن جهاز المناعة في الجسم (الذي يحمي الجسم عادة من العدو) يهاجم أنسجتك و أعضائك المختلفة كما لو كانت غريبة</p>
                <h3>:ما هو سبب الذئبة الحمراء</h3>
                <p>سبب الذئبة ليس معروفا حتي األن. من المحتمل أن يكون هن اك مكون وراثي (مما يعني أن خ طر الشخص أعلى إذا كان لديه أفراد عائلة مصابون بالمرض) ، ولكن يعتقد أن العوامل البيئية تلعب دورا أيضا: مثل حدوث خلل بجهاز المناعة نتيجة عدوي فيروسية او التعرض لصدمة نفسية او نقص ببعض الفيتامينات او خلل بالهرمونات</p>
                <p>غالبًا ما يبدأ األشخاص المصابون بمرض الذئبة في ظهور األعراض في مرحلة الشباب، على الرغم من أنه يمكن أن يحدث في أي عمر</p>
                <h3>:هل يوجد عالج نهائي</h3>
                <p>أمراض المناعة الذاتية أغلبها امراض مزمنة مثل الضغط و السكر, و مسئولية الطبيب هو اعطاء اقل جرعة دواء تسيطر علي المرض و تقليل فرص الأعراض الجانبية و تقضي علي االتهاب و منع االنتكاسات</p>
                <h3>:النصائح</h3>
                <ol>
                    <li>أخذ الأدوية والمتابعة بانتظام كما يحدد الطبيب المتابع</li>
                    <li>تجنبي التعرض  لاشعة الشمس خلال منتصف النهار (بين 10صباحا و 4 مساءا)  لانها تزيد من نشاط المرض</li>
                    <li>استخدمي واقيًا للجلد حماية من الشمس 50 (SPF) أو أكثر كل يوم، و يوضع علي الجلد 30 إلى 60 دقيقة قبل الخروج ويجب إعادة
وضعه كل 4 إلى 6 ساعات</li>
                    <li>تجنب مواطن العدوي لمنع حدوث مضاعفات و انتكاسات</li>
                    <li>
                        <b><u>النظام الغذائي والتغذية:</u></b>
                        <ul>
                            <li> يجب تناول نظام غذائي متوازن: قليل الدهون, غني بالفواكه والخضروات الطازجة والحبوب الكاملة ؛ ويحتوي على كمية معتدلة
من اللحوم والدواجن واألسماك, بدون مواد حافظة </li>
                            <li> لا يوصى بالمكملات الغذائية العشبية والمكملات الغذائية األخرى وقد تسبب ضررا</li>
                        </ul>
                    </li>
                    <li><b><u>الرياضة:</u></b> عدم النشاط يمكن أن يؤدي إلى فقدان قوة العضلات، مما قد يجعلك
تشعرين بالسوء على المدى الطويل , و ينصح برياضة خفيفة</li>
                    <li><b><u>تجنب التدخين: </u></b>  ارتبط تدخين السجائر بزيادة الأعراض لدى الأشخاص المصابين بمرض الذئبة، وله آثار صحية سلبية أخرى</li>
                    <li><b><u>اللقاحات:</u></b> باستخدام اللقاحات للوقاية من الالتهاب الرئوي
والأنفلونزا</li>
                    <li>
                        <b><u>الأدوية:</u></b>
                        <ul>
                            <li> لا يأخذ المريض اي علاجات الا بعد الرجوع للطبيب المعالج
لتجنب حدوث تفاعلات ضارة مع األدوية</li>
                            <li> من المعروف أن بعض الادوية تؤدي إلى تفاقم مرض الذئبة أحد
الأمثلة على ذلك هو مادة "السلفا</li>
                        </ul>
                    </li>
                    <li>
                        <b><u>تنظيم األسرة ووسائل منع الحمل:</u></b>
                        <ul>
                            <li>يعتبر تنظيم الأسرة من الاعتبارات الهامة لدى النساء المصابات بمرض
الذئبة، حيث أن العديد من النساء المصابات بمرض الذئبة في سن الانجاب </li>
                            <li>
                            من المهم أن تناقشي مع الطبيب ما إذا كنتي ترغبي في الحمل أم لا ، وما إذا كنتي تخططي للحمل في المستقبل أيضا ، هناك بعض الأدوية المستخدمة لعلاج الذئبة التي ليست آمنة للتناول أثناء الحمل
                            </li>
                        </ul>
                    </li>
                </ol>
            </PostWrapper>
        </Layout>
    )
}