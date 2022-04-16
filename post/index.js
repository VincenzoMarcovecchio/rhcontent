RuRansom: the destructive malware attacking Russia.

RuRansom is a ransomware that targets Russian systems. During the ongoing cyber warfare between Russia and Ukraine, there have already been several malware attacks such as WhisperGate, IsaacWiper and HermeticWiper.

RuRansom is a new addition to this destructive malware series. It is specially designed to destroy the victim's backup and data.

VMware's Cyber Threat Analysis specialists published an analysis of RuRansom malware and found that the malware only attacks systems in Russia.

The code block showing that the malware is aimed at targeting russia. Source VMWare

For the first time, experts from information security firm Trend Micro talked about RuRansom in March of this year.

Although the name of the malware uses the word "ransom", RuRansom is not ransomware, but a wiper, as it permanently destroys the encrypted files of its victims.

In the ransom note, which is usually displayed by ransomware, the malware author states his true motives. According to him, he created RuRansom for the sole purpose of causing damage to Russia.

"There is no way to decrypt your files. No payment, only damages "

the note said.

The wiper is written with the .NET framework and spreads like a worm.

At runtime, immediately call the IsRussia () function, check the system's public IP address using the https: // api [.] Ipify [.] Org service.

Using the IP address, the malware determines the location of the machine using the URL https: // ip-api [.] Com / # <public ip>.

If the data on the location of the machine does not contain the word "Russia", the notification "Only Russian users can run the program" appears and the execution stops.
