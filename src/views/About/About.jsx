import styles from "./About.module.scss";
import { motion } from "framer-motion";
import { Loader } from "../../components/Loader";

export const About = () => {
  return (
    <>
      <Loader width={["0%", "100%"]} />
      <h4 className={styles.title}>პროექტის შესახებ</h4>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.aboutProject}
      >
        <div className={styles.aboutTexts}>
          <p className={styles.aboutText}>
            როცა წიგნი გვახსენდება, ქაღალდის ფურცელზე დაბეჭდილი ობიექტი
            წარმოგვიდგება, მაგარ ან რბილ ყდაში აკინძული. ეს ჩვენი წარმოდგენა
            დღეს შეიძლება საერთოდ აღარ შეესაბამებოდეს რეალობას. დღეს წიგნს
            ხშირად ფაილის სახე აქვს. ასეთ წიგნს საერთოდ არ გააჩნია
            მატერიალური გარსი. ის მხოლოდ კომპიუტერულ მოწყობილობაში ჩაწერილი
            ბინარული მონაცემების სახით არსებობს. მისი ფორმა იმ მოწყობილობით
            არის განპირობებული, რომელშიც თავად წიგნია ჩატვირთული.
          </p>
          <p className={styles.aboutText}>
            კაცობრიობის განვითარების სხვადასხვა პერიოდში წიგნს განსხვავებული
            სახით გამოსცემდნენ. უძველესი შუმერული წიგნები თიხის ფირფიტებისა
            იყო. ჩვენი გადმოსახედიდან, ისინი აგურებს უფრო ჰგვანან ვიდრე
            წიგნებს. ეგვიპტელები წიგნებს პაპირუსზე წერდნენ, მასალიდან
            გამომდინარე, ასეთ წიგნებს გრძელი გრაგნილების სახე ჰქონდათ.
            შუასაუკუნეების ხელნაწერი წიგნები, ფოლიანტები, ძალიან დიდი ზომისა
            იყო. ასეთ წიგნთან ერთად შენს ოთახში ვერ განმარტოვდებოდი, ასეთ
            წიგნს მუხლებზე ვერ დაიდებდი, მათ სპეციალურად მოწყობილ მაგიდებზე
            დებდნენ და ისე კითხულობდნენ.
          </p>
          <p className={styles.aboutText}>
            წიგნის გარეგანი ფორმის ცვლილებასთან ერთად იცვლებოდა წიგნის
            ავტორი, მისი გამომცემელი და წიგნის მკითხველი. იცვლებოდა თავად
            ამბავიც რომელსაც წიგნი ყვება. არ იცვლება ის უსაზღვრო
            შესაძლებლობები რომელსაც წიგნი გვაძლევს. ვიმოგზაუროთ იქ სადაც არ
            ვყოფილვართ, გავხდეთ თანაზიარი იმ ამბებისა რომელიც ჩვენ არ
            გადაგვხდენია თავს. გავიზიაროთ აზრები რომელსაც ავტორი გვთავაზობს.
          </p>
          <p className={styles.aboutText}>
            ეს წიგნი, წიგნის ინტერნეტ გამოცემაა. ამ წიგნით მოყოლილი ამბები
            ტექნოლოგიებსა და თანამედროვე ადამიანის მაგიურ შესაძლებლობებზეა.
            ამ წიგნის ქაღალდზე დაბეჭდილი ვერსია არ არსებობს, წიგნში
            მოთხრობილი ამბების წაკითხვა, მოსმენა მხოლოდ ტექნოლოგიების
            წყალობით არის შესაძლებელი.
          </p>
        </div>
      </motion.div>
    </>
  )
}