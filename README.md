Hello, Full Stack Students✌️!

✔️Conditional Statement

✔️Looping
    Looping digunakan untuk menjalankan tugas secara berulang-ulang sampai suatu kondisi terpenuhi.

    🔹Jenis-Jenis Looping

        ▪️While
            Akan melakukan pengecekan condition terlebih dahulu sebelum menjalankan task.
            Syntax:

                initialValue;
                while(condition){
                    task;
                    exitWay;
                }

            Example:

                let start = 1;

                while (start <= 10) {
                    console.log('Purwadhika');
                    start++;
                }

        ▪️Do-While
            Akan menjalankan task terlebih dahulu, dilanjutkan melakukan pengecekan condition.
            Syntax:

                initialValue;
                do{
                    task;
                    exitWay;
                }while(condition)

            Example:

                let startLoop = 1;
                do {
                    console.log('Purwadhika');
                    startLoop++;
                } while (startLoop <= 10);

        ▪️For-Loop
            Mirip seperti `do-while`, syntax nya lebih ringkas
            Syntax:

                for(initialValue; condition; exitWay){
                    task;
                }

            Example:

                for (let i = 1; i <= 10; i++) {
                    console.log('Purwadhika');
                }
