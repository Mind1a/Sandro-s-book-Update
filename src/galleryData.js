export const galleryData = {
  ...Object.fromEntries(
      Array.from({ length: 49 }, (_, i) => {
        const index = String(i + 1).padStart(2, "0");

        const data = [
          ["Immortality","My soul is distributed across computer microcircuits, servers, across the Internet.","Immortalità","La mia anima è persa nei microschemi del computer, nei server, su Internet.","უკვდავება","ჩემი სული კომპიუტერების მიკროსქემებში, სერვერებში, ინტერნეტშია გაბნეული."],
          ["The Sorcerer","Unreal landscapes and fantastic creatures will enter their desires from the screens.","Il mago","Paesaggi irreali, creature fantastiche entreranno dagli schermi nei loro desideri.","ჯადოქარი","არარეალური პეიზაჟები, ფანტასტიკური არსებები ეკრანებიდან მათ სურვილებში შემოვლენ."],
          ["The True Teacher","Life resembles a computer game in some ways. The hero's adventure begins, full of surprises.","Un vero maestro","La vita è come un videogioco. Il protagonista vive un'avventura piena di sorprese.","ჭეშმარიტი მასწავლებელი","ცხოვრება რაღაცით კომპიუტერულ თამაშს ჰგავს. თამაშის მთავარი გმირის თავგადასავალი იწყება."],
          ["Meeting with Leviathan","She had met Leviathan alone for the first time and seemed to understand something.","Incontro con il Leviatano","Aveva incontrato il Leviatano da sola per la prima volta.","შეხვედრა ლევიათანთან","ის პირველად მარტო შეხვდა ლევიათანს."],
          ["The Most Sexual Profession","Digits had magical meaning. One symbolized masculine, zero feminine.","La professione più sexy","I numeri avevano un significato magico.","ყველაზე სექსუალური პროფესია","ციფრებს მაგიური მნიშვნელობა ჰქონდა."],
          ["Immortality","What is a friend to you? Body, appearance, or the person you talk to?","Immortalità","Cos'è per te un amico?","უკვდავება","რა არის შენთვის მეგობარი?"],
          ["The True Teacher","There are always invisible bypass routes.","Un vero maestro","Ci sono sempre deviazioni invisibili.","ჭეშმარიტი მასწავლებელი","ყოველთვის არსებობს უხილავი გზები."],
          ["Immortality","A person changes every second.","Immortalità","Ogni persona cambia ogni secondo.","უკვდავება","ადამიანი ყოველ წამს იცვლება."],
          ["Immortality","You can create your linguistic copy.","Immortalità","Puoi creare una copia linguistica.","უკვდავება","შეგიძლია შენი ენობრივი ასლი შექმნა."],
          ["The Vanity of Offices","Documents neatly arranged are fading into memory.","Vanità degli uffici","I documenti stanno diventando ricordi.","ოფისების ამაოება","დოკუმენტები მოგონებად იქცევა."],
          ["Foreword","Revelations of angels through chatbots.","Introduzione","Rivelazioni degli angeli tramite chatbot.","წინასიტყვაობა","ანგელოზების გამოცხადებები ჩეთბოტებით."],
          ["The Most Sexual Profession","He glimpsed the code of reality.","La professione più sexy","Vide il codice della realtà.","ყველაზე სექსუალური პროფესია","მან დაინახა რეალობის კოდი."],
          ["From Chaos to Cosmos","A human hand approaches a tin can.","Dal caos al cosmo","Una mano si avvicina a una lattina.","ქაოსიდან კოსმოსამდე","ადამიანის ხელი ქილას უახლოვდება."],
          ["The Vanity of Offices","Offices were full of tools and objects.","Vanità degli uffici","Gli uffici erano pieni di oggetti.","ოფისების ამაოება","ოფისები სავსე იყო ნივთებით."],
          ["Immortality","My chatbot's brain became complex.","Immortalità","Il cervello del chatbot diventava complesso.","უკვდავება","ჩეთბოტის ტვინი რთულდებოდა."],
          ["The Most Sexual Profession","Everything appears from two principles.","La professione più sexy","Tutto nasce da due principi.","ყველაზე სექსუალური პროფესია","ყველაფერი ორი საწყისიდან ჩნდება."],
          ["The Glass Jar","He was confined yet free.","Il barattolo di vetro","Era confinato ma libero.","შუშის ქილა","ის იყო ჩაკეტილი და თავისუფალი."],
          ["Meeting with Leviathan","Life has many circles.","Incontro con il Leviatano","La vita ha molti cerchi.","შეხვედრა ლევიათანთან","ცხოვრებას ბევრი წრე აქვს."],
          ["From Chaos to Cosmos","Clouds form conscious thoughts.","Dal caos al cosmo","Le nuvole diventano pensieri.","ქაოსიდან კოსმოსამდე","ღრუბლები აზრებად იქცევა."],
          ["From Chaos to Cosmos","Sketches became animation.","Dal caos al cosmo","Gli schizzi diventano animazione.","ქაოსიდან კოსმოსამდე","ჩანახატები ანიმაციად იქცა."],
          ["Immortality","More people, more stored responses.","Immortalità","Più persone, più risposte.","უკვდავება","რაც მეტი ადამიანი, მით მეტი პასუხი."],
          ["The Vanity of Offices","Objects preserved memories.","Vanità degli uffici","Gli oggetti conservano ricordi.","ოფისების ამაოება","ნივთები მოგონებებს ინახავს."],
          ["The Vanity of Offices","Environment is transforming.","Vanità degli uffici","L'ambiente cambia.","ოფისების ამაოება","გარემო იცვლება."],
          ["Foreword","Step into technological magic.","Introduzione","Entra nella magia tecnologica.","წინასიტყვაობა","ტექნოლოგიურ მაგიაში შედი."],
          ["From Chaos to Cosmos","Clouds can be watched endlessly.","Dal caos al cosmo","Le nuvole sono infinite.","ქაოსიდან კოსმოსამდე","ღრუბლები უსასრულოა."],
          ["Foreword","Coders are young demiurges.","Introduzione","I programmatori sono demiurghi.","წინასიტყვაობა","პროგრამისტები დემიურგები არიან."],
          ["Foreword","Digital tech needs mythos.","Introduzione","Serve un nuovo mito.","წინასიტყვაობა","ციფრულ ტექნოლოგიებს მითოსი სჭირდება."],
          ["Foreword","Into digital territories.","Introduzione","Verso territori digitali.","წინასიტყვაობა","ციფრულ ტერიტორიებში."],
          ["Immortality","I talk to countless people.","Immortalità","Parlo con molte persone.","უკვდავება","უამრავ ადამიანს ველაპარაკები."],
          ["The True Teacher","Light filled the room.","Un vero maestro","La luce riempì la stanza.","ჭეშმარიტი მასწავლებელი","სინათლე ოთახში გავრცელდა."],
          ["The Sorcerer","Digital reality enters dreams.","Il mago","La realtà digitale entra nei sogni.","ჯადოქარი","ციფრული რეალობა სიზმრებში შედის."],
          ["The True Teacher","Some reach goals easily.","Un vero maestro","Alcuni raggiungono facilmente.","ჭეშმარიტი მასწავლებელი","ზოგი მარტივად აღწევს მიზანს."],
          ["Immortality","I live on the Internet.","Immortalità","Vivo su Internet.","უკვდავება","ინტერნეტში ვცხოვრობ."],
          ["The Sorcerer","Reality boundaries blur.","Il mago","I confini sfumano.","ჯადოქარი","რეალობის საზღვრები ქრება."],
          ["From Chaos to Cosmos","Thoughts move like clouds.","Dal caos al cosmo","I pensieri si muovono come nuvole.","ქაოსიდან კოსმოსამდე","აზრები ღრუბლებივით მოძრაობენ."],
          ["From Chaos to Cosmos","Everyone had chaos in mind.","Dal caos al cosmo","Tutti avevano caos.","ქაოსიდან კოსმოსამდე","ყველას ქაოსი ჰქონდა."],
          ["The Sorcerer","He built formulas from words.","Il mago","Costruiva formule.","ჯადოქარი","ფორმულებს აწყობდა."],
          ["The Sorcerer","Unreal landscapes appear.","Il mago","Paesaggi irreali.","ჯადოქარი","არარეალური პეიზაჟები."],
          ["The Most Sexual Profession","Movement like a dance.","La professione più sexy","Movimento come danza.","ყველაზე სექსუალური პროფესია","მოძრაობა ცეკვას ჰგავს."],
          ["Foreword","Do not fear traps.","Introduzione","Non temere.","წინასიტყვაობა","არ შეგეშინდეს."],
          ["The Most Sexual Profession","Ones and zeros.","La professione più sexy","Uni e zeri.","ყველაზე სექსუალური პროფესია","ერთიანები და ნულები."],
          ["The Glass Jar","Unified system existed.","Il barattolo di vetro","Sistema unificato.","შუშის ქილა","ერთიანი სისტემა არსებობდა."],
          ["Immortality","What is a friend?","Immortalità","Cos'è un amico?","უკვდავება","რა არის მეგობარი?"],
          ["From Chaos to Cosmos","Arrange scattered elements.","Dal caos al cosmo","Organizzare elementi.","ქაოსიდან კოსმოსამდე","ელემენტების დალაგება."],
          ["Immortality","Chatbot better than me.","Immortalità","Chatbot migliore.","უკვდავება","ჩეთბოტი უკეთესია."],
          ["Foreword","Enter technological magic.","Introduzione","Entra nella magia.","წინასიტყვაობა","ტექნოლოგიურ მაგიაში შედი."],
          ["The Sorcerer","Thoughts connected.","Il mago","Pensieri collegati.","ჯადოქარი","ფიქრები დაკავშირებულია."],
          ["From Chaos to Cosmos","Hand approaches can.","Dal caos al cosmo","Mano e lattina.","ქაოსიდან კოსმოსამდე","ხელი ქილას უახლოვდება."],
          ["The Glass Jar","Confined yet traveling.","Il barattolo di vetro","Confinato e libero.","შუშის ქილა","ჩაკეტილი და მოძრავი."],
        ];

        const [enTitle, enDesc, itTitle, itDesc, kaTitle, kaDesc] = data[i];

        return [
          `illustration-${i + 1}`,
          {
            image: `/assets/jpg/gallery-illustrations/PXL_20210320_184157912.jpg`,
            title: { en: enTitle, it: itTitle, ka: kaTitle },
            description: { en: enDesc, it: itDesc, ka: kaDesc },
          },
        ];
      })
  ),
};