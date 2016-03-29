// Structure of the tree (CLOUD_TIER2 View) used in the EGI Accounting Portal
d.add(0,-1,'Hierarchical Tree');
d.add(1,0,'Tier1','/tier1.php','Click to access to the Tier1 View','_top','dtree/dtreeimg/folder.png');
d.add(2,0,'Tier2','/tier2.php','Click to access to the Tier2 View','_top','dtree/dtreeimg/folder.png');
d.add(3,0,'Countries','/country.php','Click to access to the Countries View','_top','dtree/dtreeimg/folder.png');
d.add(4,0,'EMI3','/show.php','Click to access to the EMI3 View','_top','','',true);
d.add(5,0,'EGI','/egi.php','Click to access to the EGI View','_top','','',true);
d.add(6,0,'OSG','/osg.php','Click to access to the OSG View','_top','dtree/dtreeimg/folder.png');
d.add(8,0,'UNREGISTERED','/unreg.php','Click to access to the Unregistered View','_top','dtree/dtreeimg/folder.png');
d.add(9,0,'VO_Discipline','/vodis.php','Click to access to the VO_Discipline View','_top','dtree/dtreeimg/folder.png');
d.add(7,0,'VO_Metrics','/vomet.php','Click to access to the VO_Metrics View');
d.add(10,0,'CUSTOM_view','/custom.php','Click to access to the Custom View');

// Identity number for the CLOUD_TIER2 node
var unregid=13;
d.add(11,0,'Cloud','/cloud.php','Click to access to the Cloud View','_top','','',true);
d.add(12,0,'Cloud Tier1','/cloud_tier1.php','Click to access to the Cloud TIER1 View','_top','','',true);
d.add(13,0,'Cloud Tier2','/cloud_tier2.php');
d.add(31060,13,'Australia','/cloud_tier2.php?Path=1.1');
d.add(31070,31060,'AU-ATLAS','/cloud_tier2.php?Path=1.1.1');
d.add(31080,31070,'Australia-ATLAS','/cloud_tier2.php?ExecutingSite=Australia-ATLAS&Path=1.1.1.1');
d.add(31090,13,'Austria','/cloud_tier2.php?Path=1.2');
d.add(31100,31090,'AT-HEPHY-VIENNA-UIBK','/cloud_tier2.php?Path=1.2.1');
d.add(31110,31100,'HEPHY-UIBK','/cloud_tier2.php?ExecutingSite=HEPHY-UIBK&Path=1.2.1.1');
d.add(31120,31100,'Hephy-Vienna','/cloud_tier2.php?ExecutingSite=Hephy-Vienna&Path=1.2.1.2');
d.add(31130,13,'Belgium','/cloud_tier2.php?Path=1.3');
d.add(31140,31130,'BE-TIER2','/cloud_tier2.php?Path=1.3.1');
d.add(31150,31140,'BEgrid-ULB-VUB','/cloud_tier2.php?ExecutingSite=BEgrid-ULB-VUB&Path=1.3.1.1');
d.add(31160,31140,'BelGrid-UCL','/cloud_tier2.php?ExecutingSite=BelGrid-UCL&Path=1.3.1.2');
d.add(31170,13,'Brazil','/cloud_tier2.php?Path=1.4');
d.add(31180,31170,'BR-SP-SPRACE','/cloud_tier2.php?Path=1.4.1');
d.add(31190,31180,'SPRACE','/cloud_tier2.php?ExecutingSite=SPRACE&Path=1.4.1.1');
d.add(31200,13,'Canada','/cloud_tier2.php?Path=1.5');
d.add(31210,31200,'CA-EAST-T2','/cloud_tier2.php?Path=1.5.1');
d.add(31220,31210,'CA-MCGILL-CLUMEQ-T2','/cloud_tier2.php?ExecutingSite=CA-MCGILL-CLUMEQ-T2&Path=1.5.1.1');
d.add(31230,31210,'CA-SCINET-T2','/cloud_tier2.php?ExecutingSite=CA-SCINET-T2&Path=1.5.1.2');
d.add(31240,31200,'CA-WEST-T2','/cloud_tier2.php?Path=1.5.2');
d.add(31250,31240,'CA-VICTORIA-WESTGRID-T2','/cloud_tier2.php?ExecutingSite=CA-VICTORIA-WESTGRID-T2&Path=1.5.2.1');
d.add(31260,31240,'SFU-LCG2','/cloud_tier2.php?ExecutingSite=SFU-LCG2&Path=1.5.2.2');
d.add(31270,13,'China','/cloud_tier2.php?Path=1.6');
d.add(31280,31270,'CN-IHEP','/cloud_tier2.php?Path=1.6.1');
d.add(31290,31280,'BEIJING-LCG2','/cloud_tier2.php?ExecutingSite=BEIJING-LCG2&Path=1.6.1.1');
d.add(31300,13,'Czech Republic','/cloud_tier2.php?Path=1.7');
d.add(31310,31300,'CZ-Prague-T2','/cloud_tier2.php?Path=1.7.1');
d.add(31320,31310,'praguelcg2','/cloud_tier2.php?ExecutingSite=praguelcg2&Path=1.7.1.1');
d.add(31330,13,'Estonia','/cloud_tier2.php?Path=1.8');
d.add(31340,31330,'EE-NICPB','/cloud_tier2.php?Path=1.8.1');
d.add(31350,31340,'T2_Estonia','/cloud_tier2.php?ExecutingSite=T2_Estonia&Path=1.8.1.1');
d.add(31360,13,'Finland','/cloud_tier2.php?Path=1.9');
d.add(31370,31360,'FI-HIP-T2','/cloud_tier2.php?Path=1.9.1');
d.add(31380,31370,'FI_HIP_T2','/cloud_tier2.php?ExecutingSite=FI_HIP_T2&Path=1.9.1.1');
d.add(31390,13,'France','/cloud_tier2.php?Path=1.10');
d.add(31400,31390,'FR-GRIF','/cloud_tier2.php?Path=1.10.3');
d.add(31410,31400,'GRIF','/cloud_tier2.php?ExecutingSite=GRIF&Path=1.10.3.1');
d.add(31420,31390,'FR-IN2P3-CC-T2','/cloud_tier2.php?Path=1.10.1');
d.add(31430,31420,'IN2P3-CC-T2','/cloud_tier2.php?ExecutingSite=IN2P3-CC-T2&Path=1.10.1.1');
d.add(31440,31390,'FR-IN2P3-CPPM','/cloud_tier2.php?Path=1.10.2');
d.add(31450,31440,'IN2P3-CPPM','/cloud_tier2.php?ExecutingSite=IN2P3-CPPM&Path=1.10.2.1');
d.add(31460,31390,'FR-IN2P3-IPHC','/cloud_tier2.php?Path=1.10.4');
d.add(31470,31460,'IN2P3-IRES','/cloud_tier2.php?ExecutingSite=IN2P3-IRES&Path=1.10.4.1');
d.add(31480,31390,'FR-IN2P3-LAPP','/cloud_tier2.php?Path=1.10.5');
d.add(31490,31480,'IN2P3-LAPP','/cloud_tier2.php?ExecutingSite=IN2P3-LAPP&Path=1.10.5.1');
d.add(31500,31390,'FR-IN2P3-LPC','/cloud_tier2.php?Path=1.10.6');
d.add(31510,31500,'IN2P3-LPC','/cloud_tier2.php?ExecutingSite=IN2P3-LPC&Path=1.10.6.1');
d.add(31520,31390,'FR-IN2P3-LPSC','/cloud_tier2.php?Path=1.10.7');
d.add(31530,31520,'IN2P3-LPSC','/cloud_tier2.php?ExecutingSite=IN2P3-LPSC&Path=1.10.7.1');
d.add(31540,31390,'FR-IN2P3-SUBATECH','/cloud_tier2.php?Path=1.10.8');
d.add(31550,31540,'IN2P3-SUBATECH','/cloud_tier2.php?ExecutingSite=IN2P3-SUBATECH&Path=1.10.8.1');
d.add(31560,13,'Germany','/cloud_tier2.php?Path=1.11');
d.add(31570,31560,'DE-DESY-ATLAS-T2','/cloud_tier2.php?Path=1.11.1');
d.add(31580,31570,'DESY-HH','/cloud_tier2.php?ExecutingSite=DESY-HH&Path=1.11.1.1');
d.add(31590,31570,'DESY-ZN','/cloud_tier2.php?ExecutingSite=DESY-ZN&Path=1.11.1.2');
d.add(31600,31560,'DE-DESY-GOE-ATLAS-T2','/cloud_tier2.php?Path=1.11.3');
d.add(31610,31600,'GoeGrid','/cloud_tier2.php?ExecutingSite=GoeGrid&Path=1.11.3.1');
d.add(31620,31560,'DE-DESY-LHCB','/cloud_tier2.php?Path=1.11.7');
d.add(31630,31620,'DESY-ZN','/cloud_tier2.php?ExecutingSite=DESY-ZN&Path=1.11.7.1');
d.add(31640,31560,'DE-DESY-RWTH-CMS-T2','/cloud_tier2.php?Path=1.11.5');
d.add(31650,31640,'DESY-HH','/cloud_tier2.php?ExecutingSite=DESY-HH&Path=1.11.5.1');
d.add(31660,31640,'DESY-ZN','/cloud_tier2.php?ExecutingSite=DESY-ZN&Path=1.11.5.2');
d.add(31670,31640,'RWTH-Aachen','/cloud_tier2.php?ExecutingSite=RWTH-Aachen&Path=1.11.5.3');
d.add(31680,31560,'DE-FREIBURGWUPPERTAL','/cloud_tier2.php?Path=1.11.2');
d.add(31690,31680,'UNI-FREIBURG','/cloud_tier2.php?ExecutingSite=UNI-FREIBURG&Path=1.11.2.1');
d.add(31700,31680,'wuppertalprod','/cloud_tier2.php?ExecutingSite=wuppertalprod&Path=1.11.2.2');
d.add(31710,31560,'DE-GSI','/cloud_tier2.php?Path=1.11.6');
d.add(31720,31710,'GSI-LCG2','/cloud_tier2.php?ExecutingSite=GSI-LCG2&Path=1.11.6.1');
d.add(31730,31560,'DE-MCAT','/cloud_tier2.php?Path=1.11.4');
d.add(31740,31730,'LRZ-LMU','/cloud_tier2.php?ExecutingSite=LRZ-LMU&Path=1.11.4.1');
d.add(31750,31730,'MPPMU','/cloud_tier2.php?ExecutingSite=MPPMU&Path=1.11.4.2');
d.add(31760,13,'Greece','/cloud_tier2.php?Path=1.12');
d.add(31770,31760,'GR-GRIDLAB-KAVALA','/cloud_tier2.php?Path=1.12.1');
d.add(31780,31770,'GR-12-TEIKAV','/cloud_tier2.php?ExecutingSite=GR-12-TEIKAV&Path=1.12.1.1');
d.add(31790,31760,'GR-Ioannina-HEP','/cloud_tier2.php?Path=1.12.2');
d.add(31800,31790,'GR-07-UOI-HEPLAB','/cloud_tier2.php?ExecutingSite=GR-07-UOI-HEPLAB&Path=1.12.2.1');
d.add(31810,13,'Hungary','/cloud_tier2.php?Path=1.13');
d.add(31820,31810,'HU-HGCC-T2','/cloud_tier2.php?Path=1.13.1');
d.add(31830,31820,'BUDAPEST','/cloud_tier2.php?ExecutingSite=BUDAPEST&Path=1.13.1.1');
d.add(31840,13,'India','/cloud_tier2.php?Path=1.14');
d.add(31850,31840,'IN-DAE-KOLKATA-TIER2','/cloud_tier2.php?Path=1.14.2');
d.add(31860,31850,'IN-DAE-VECC-02','/cloud_tier2.php?ExecutingSite=IN-DAE-VECC-02&Path=1.14.2.1');
d.add(31870,31840,'IN-INDIACMS-TIFR','/cloud_tier2.php?Path=1.14.1');
d.add(31880,31870,'INDIACMS-TIFR','/cloud_tier2.php?ExecutingSite=INDIACMS-TIFR&Path=1.14.1.1');
d.add(31890,13,'Israel','/cloud_tier2.php?Path=1.15');
d.add(31900,31890,'IL-HEPTier-2','/cloud_tier2.php?Path=1.15.1');
d.add(31910,31900,'IL-TAU-HEP','/cloud_tier2.php?ExecutingSite=IL-TAU-HEP&Path=1.15.1.1');
d.add(31920,31900,'TECHNION-HEP','/cloud_tier2.php?ExecutingSite=TECHNION-HEP&Path=1.15.1.2');
d.add(31930,31900,'WEIZMANN-LCG2','/cloud_tier2.php?ExecutingSite=WEIZMANN-LCG2&Path=1.15.1.3');
d.add(31940,13,'Italy','/cloud_tier2.php?Path=1.16');
d.add(31950,31940,'IT-INFN-T2','/cloud_tier2.php?Path=1.16.1');
d.add(31960,31950,'INFN-BARI','/cloud_tier2.php?ExecutingSite=INFN-BARI&Path=1.16.1.1');
d.add(31970,31950,'INFN-CATANIA','/cloud_tier2.php?ExecutingSite=INFN-CATANIA&Path=1.16.1.2');
d.add(31980,31950,'INFN-CNAF-LHCB','/cloud_tier2.php?ExecutingSite=INFN-CNAF-LHCB&Path=1.16.1.3');
d.add(31990,31950,'INFN-FRASCATI','/cloud_tier2.php?ExecutingSite=INFN-FRASCATI&Path=1.16.1.4');
d.add(32000,31950,'INFN-LNL-2','/cloud_tier2.php?ExecutingSite=INFN-LNL-2&Path=1.16.1.5');
d.add(32010,31950,'INFN-MILANO-ATLASC','/cloud_tier2.php?ExecutingSite=INFN-MILANO-ATLASC&Path=1.16.1.6');
d.add(32020,31950,'INFN-NAPOLI-ATLAS','/cloud_tier2.php?ExecutingSite=INFN-NAPOLI-ATLAS&Path=1.16.1.7');
d.add(32030,31950,'INFN-PISA','/cloud_tier2.php?ExecutingSite=INFN-PISA&Path=1.16.1.8');
d.add(32040,31950,'INFN-ROMA1','/cloud_tier2.php?ExecutingSite=INFN-ROMA1&Path=1.16.1.9');
d.add(32050,31950,'INFN-ROMA1-CMS','/cloud_tier2.php?ExecutingSite=INFN-ROMA1-CMS&Path=1.16.1.10');
d.add(32060,31950,'INFN-TORINO','/cloud_tier2.php?ExecutingSite=INFN-TORINO&Path=1.16.1.11');
d.add(32070,13,'Japan','/cloud_tier2.php?Path=1.17');
d.add(32080,32070,'JP-Tokyo-ATLAS-T2','/cloud_tier2.php?Path=1.17.1');
d.add(32090,32080,'TOKYO-LCG2','/cloud_tier2.php?ExecutingSite=TOKYO-LCG2&Path=1.17.1.1');
d.add(32100,13,'Latin America','/cloud_tier2.php?Path=1.18');
d.add(32110,32100,'T2-LATINAMERICA','/cloud_tier2.php?Path=1.18.1');
d.add(32120,32110,'CBPF','/cloud_tier2.php?ExecutingSite=CBPF&Path=1.18.1.1');
d.add(32130,32110,'EELA-UTFSM','/cloud_tier2.php?ExecutingSite=EELA-UTFSM&Path=1.18.1.2');
d.add(32140,32110,'ICN-UNAM','/cloud_tier2.php?ExecutingSite=ICN-UNAM&Path=1.18.1.3');
d.add(32150,32110,'SAMPA','/cloud_tier2.php?ExecutingSite=SAMPA&Path=1.18.1.4');
d.add(32160,32110,'UERJ','/cloud_tier2.php?ExecutingSite=UERJ&Path=1.18.1.5');
d.add(32170,13,'Malaysia','/cloud_tier2.php?Path=1.19');
d.add(32180,32170,'MY-T2-UM','/cloud_tier2.php?Path=1.19.1');
d.add(32190,32180,'T2-MY-UMSIFIR','/cloud_tier2.php?ExecutingSite=T2-MY-UMSIFIR&Path=1.19.1.1');
d.add(32200,13,'Mexico','/cloud_tier2.php?Path=1.20');
d.add(32210,32200,'T2_UNAM','/cloud_tier2.php?Path=1.20.1');
d.add(32220,32210,'SUPERCOMPUTO-UNAM','/cloud_tier2.php?ExecutingSite=SUPERCOMPUTO-UNAM&Path=1.20.1.1');
d.add(32230,13,'Pakistan','/cloud_tier2.php?Path=1.21');
d.add(32240,32230,'PK-CIIT-ALICE','/cloud_tier2.php?Path=1.21.1');
d.add(32250,32240,'PK-CIIT','/cloud_tier2.php?ExecutingSite=PK-CIIT&Path=1.21.1.1');
d.add(32260,32230,'PK-CMS-T2','/cloud_tier2.php?Path=1.21.2');
d.add(32270,32260,'NCP-LCG2','/cloud_tier2.php?ExecutingSite=NCP-LCG2&Path=1.21.2.1');
d.add(32280,13,'Poland','/cloud_tier2.php?Path=1.22');
d.add(32290,32280,'PL-TIER2-WLCG','/cloud_tier2.php?Path=1.22.1');
d.add(32300,32290,'CYFRONET-LCG2','/cloud_tier2.php?ExecutingSite=CYFRONET-LCG2&Path=1.22.1.1');
d.add(32310,32290,'ICM','/cloud_tier2.php?ExecutingSite=ICM&Path=1.22.1.2');
d.add(32320,32290,'PSNC','/cloud_tier2.php?ExecutingSite=PSNC&Path=1.22.1.3');
d.add(32330,13,'Portugal','/cloud_tier2.php?Path=1.23');
d.add(32340,32330,'PT-LIP-LCG-Tier2','/cloud_tier2.php?Path=1.23.1');
d.add(32350,32340,'LIP-Coimbra','/cloud_tier2.php?ExecutingSite=LIP-Coimbra&Path=1.23.1.1');
d.add(32360,32340,'LIP-Lisbon','/cloud_tier2.php?ExecutingSite=LIP-Lisbon&Path=1.23.1.2');
d.add(32370,32340,'NCG-INGRID-PT','/cloud_tier2.php?ExecutingSite=NCG-INGRID-PT&Path=1.23.1.3');
d.add(32380,13,'Republic of Korea','/cloud_tier2.php?Path=1.24');
d.add(32390,32380,'KR-KNU-T2','/cloud_tier2.php?Path=1.24.1');
d.add(32400,32390,'LCG_KNU','/cloud_tier2.php?ExecutingSite=LCG_KNU&Path=1.24.1.1');
d.add(32410,13,'Romania','/cloud_tier2.php?Path=1.25');
d.add(32420,32410,'RO-LCG','/cloud_tier2.php?Path=1.25.1');
d.add(32430,32420,'NIHAM','/cloud_tier2.php?ExecutingSite=NIHAM&Path=1.25.1.1');
d.add(32440,32420,'RO-02-NIPNE','/cloud_tier2.php?ExecutingSite=RO-02-NIPNE&Path=1.25.1.2');
d.add(32450,32420,'RO-07-NIPNE','/cloud_tier2.php?ExecutingSite=RO-07-NIPNE&Path=1.25.1.3');
d.add(32460,32420,'RO-11-NIPNE','/cloud_tier2.php?ExecutingSite=RO-11-NIPNE&Path=1.25.1.4');
d.add(32470,32420,'RO-13-ISS','/cloud_tier2.php?ExecutingSite=RO-13-ISS&Path=1.25.1.5');
d.add(32480,32420,'RO-14-ITIM','/cloud_tier2.php?ExecutingSite=RO-14-ITIM&Path=1.25.1.6');
d.add(32490,32420,'RO-16-UAIC','/cloud_tier2.php?ExecutingSite=RO-16-UAIC&Path=1.25.1.7');
d.add(32500,13,'Russian Federation','/cloud_tier2.php?Path=1.26');
d.add(32510,32500,'RU-RDIG','/cloud_tier2.php?Path=1.26.1');
d.add(32520,32510,'ITEP','/cloud_tier2.php?ExecutingSite=ITEP&Path=1.26.1.1');
d.add(32530,32510,'JINR-LCG2','/cloud_tier2.php?ExecutingSite=JINR-LCG2&Path=1.26.1.2');
d.add(32540,32510,'RRC-KI','/cloud_tier2.php?ExecutingSite=RRC-KI&Path=1.26.1.3');
d.add(32550,32510,'ru-Moscow-FIAN-LCG2','/cloud_tier2.php?ExecutingSite=ru-Moscow-FIAN-LCG2&Path=1.26.1.7');
d.add(32560,32510,'ru-Moscow-SINP-LCG2','/cloud_tier2.php?ExecutingSite=ru-Moscow-SINP-LCG2&Path=1.26.1.8');
d.add(32570,32510,'ru-PNPI','/cloud_tier2.php?ExecutingSite=ru-PNPI&Path=1.26.1.9');
d.add(32580,32510,'RU-Protvino-IHEP','/cloud_tier2.php?ExecutingSite=RU-Protvino-IHEP&Path=1.26.1.4');
d.add(32590,32510,'RU-SPbSU','/cloud_tier2.php?ExecutingSite=RU-SPbSU&Path=1.26.1.5');
d.add(32600,32510,'Ru-Troitsk-INR-LCG2','/cloud_tier2.php?ExecutingSite=Ru-Troitsk-INR-LCG2&Path=1.26.1.6');
d.add(32610,13,'Slovakia','/cloud_tier2.php?Path=1.27');
d.add(32620,32610,'SK-Tier2-Federation','/cloud_tier2.php?Path=1.27.1');
d.add(32630,32620,'FMPhI-UNIBA','/cloud_tier2.php?ExecutingSite=FMPhI-UNIBA&Path=1.27.1.1');
d.add(32640,32620,'IEPSAS-Kosice','/cloud_tier2.php?ExecutingSite=IEPSAS-Kosice&Path=1.27.1.2');
d.add(32650,13,'Slovenia','/cloud_tier2.php?Path=1.28');
d.add(32660,32650,'SI-SiGNET','/cloud_tier2.php?Path=1.28.1');
d.add(32670,32660,'SiGNET','/cloud_tier2.php?ExecutingSite=SiGNET&Path=1.28.1.1');
d.add(32680,13,'South Africa','/cloud_tier2.php?Path=1.29');
d.add(32690,32680,'ZA-CHPC-T2','/cloud_tier2.php?Path=1.29.1');
d.add(32700,32690,'ZA-CHPC','/cloud_tier2.php?ExecutingSite=ZA-CHPC&Path=1.29.1.1');
d.add(32710,13,'Spain','/cloud_tier2.php?Path=1.30');
d.add(32720,32710,'ES-ATLAS-T2','/cloud_tier2.php?Path=1.30.1');
d.add(32730,32720,'ifae','/cloud_tier2.php?ExecutingSite=ifae&Path=1.30.1.3');
d.add(32740,32720,'IFIC-LCG2','/cloud_tier2.php?ExecutingSite=IFIC-LCG2&Path=1.30.1.1');
d.add(32750,32720,'UAM-LCG2','/cloud_tier2.php?ExecutingSite=UAM-LCG2&Path=1.30.1.2');
d.add(32760,32710,'ES-CMS-T2','/cloud_tier2.php?Path=1.30.2');
d.add(32770,32760,'CIEMAT-LCG2','/cloud_tier2.php?ExecutingSite=CIEMAT-LCG2&Path=1.30.2.1');
d.add(32780,32760,'IFCA-LCG2','/cloud_tier2.php?ExecutingSite=IFCA-LCG2&Path=1.30.2.2');
d.add(32790,32710,'ES-LHCb-T2','/cloud_tier2.php?Path=1.30.3');
d.add(32800,32790,'UB-LCG2','/cloud_tier2.php?ExecutingSite=UB-LCG2&Path=1.30.3.1');
d.add(32810,32790,'USC-LCG2','/cloud_tier2.php?ExecutingSite=USC-LCG2&Path=1.30.3.2');
d.add(32820,13,'Sweden','/cloud_tier2.php?Path=1.31');
d.add(32830,32820,'SE-SNIC-T2','/cloud_tier2.php?Path=1.31.1');
d.add(32840,32830,'SE-SNIC-T2','/cloud_tier2.php?ExecutingSite=SE-SNIC-T2&Path=1.31.1.1');
d.add(32850,13,'Switzerland','/cloud_tier2.php?Path=1.32');
d.add(32860,32850,'CH-CHIPP-CSCS','/cloud_tier2.php?Path=1.32.1');
d.add(32870,32860,'CSCS-LCG2','/cloud_tier2.php?ExecutingSite=CSCS-LCG2&Path=1.32.1.1');
d.add(32880,32860,'UNIBE-LHEP','/cloud_tier2.php?ExecutingSite=UNIBE-LHEP&Path=1.32.1.2');
d.add(32890,13,'Taipei','/cloud_tier2.php?Path=1.33');
d.add(32900,32890,'TW-FTT-T2','/cloud_tier2.php?Path=1.33.1');
d.add(32910,32900,'TW-FTT','/cloud_tier2.php?ExecutingSite=TW-FTT&Path=1.33.1.1');
d.add(32920,13,'Thailand','/cloud_tier2.php?Path=1.34');
d.add(32930,32920,'TH-Tier2','/cloud_tier2.php?Path=1.34.1');
d.add(32940,32930,'T2-TH-ALICE-NSTDA','/cloud_tier2.php?ExecutingSite=T2-TH-ALICE-NSTDA&Path=1.34.1.1');
d.add(32950,32930,'T2-TH-CUNSTDA','/cloud_tier2.php?ExecutingSite=T2-TH-CUNSTDA&Path=1.34.1.2');
d.add(32960,32930,'T2-TH-SUT','/cloud_tier2.php?ExecutingSite=T2-TH-SUT&Path=1.34.1.3');
d.add(32970,13,'Turkey','/cloud_tier2.php?Path=1.35');
d.add(32980,32970,'TR-Tier2-federation','/cloud_tier2.php?Path=1.35.1');
d.add(32990,32980,'TR-03-METU','/cloud_tier2.php?ExecutingSite=TR-03-METU&Path=1.35.1.1');
d.add(33000,32980,'TR-10-ULAKBIM','/cloud_tier2.php?ExecutingSite=TR-10-ULAKBIM&Path=1.35.1.2');
d.add(33010,13,'UK','/cloud_tier2.php?Path=1.36');
d.add(33020,33010,'UK-London-Tier2','/cloud_tier2.php?Path=1.36.1');
d.add(33030,33020,'UKI-LT2-Brunel','/cloud_tier2.php?ExecutingSite=UKI-LT2-Brunel&Path=1.36.1.1');
d.add(33040,33020,'UKI-LT2-IC-HEP','/cloud_tier2.php?ExecutingSite=UKI-LT2-IC-HEP&Path=1.36.1.2');
d.add(33050,33020,'UKI-LT2-QMUL','/cloud_tier2.php?ExecutingSite=UKI-LT2-QMUL&Path=1.36.1.3');
d.add(33060,33020,'UKI-LT2-RHUL','/cloud_tier2.php?ExecutingSite=UKI-LT2-RHUL&Path=1.36.1.4');
d.add(33070,33020,'UKI-LT2-UCL-HEP','/cloud_tier2.php?ExecutingSite=UKI-LT2-UCL-HEP&Path=1.36.1.5');
d.add(33080,33010,'UK-NorthGrid','/cloud_tier2.php?Path=1.36.2');
d.add(33090,33080,'UKI-NORTHGRID-LANCS-HEP','/cloud_tier2.php?ExecutingSite=UKI-NORTHGRID-LANCS-HEP&Path=1.36.2.1');
d.add(33100,33080,'UKI-NORTHGRID-LIV-HEP','/cloud_tier2.php?ExecutingSite=UKI-NORTHGRID-LIV-HEP&Path=1.36.2.2');
d.add(33110,33080,'UKI-NORTHGRID-MAN-HEP','/cloud_tier2.php?ExecutingSite=UKI-NORTHGRID-MAN-HEP&Path=1.36.2.3');
d.add(33120,33080,'UKI-NORTHGRID-SHEF-HEP','/cloud_tier2.php?ExecutingSite=UKI-NORTHGRID-SHEF-HEP&Path=1.36.2.4');
d.add(33130,33010,'UK-ScotGrid','/cloud_tier2.php?Path=1.36.3');
d.add(33140,33130,'UKI-SCOTGRID-DURHAM','/cloud_tier2.php?ExecutingSite=UKI-SCOTGRID-DURHAM&Path=1.36.3.1');
d.add(33150,33130,'UKI-SCOTGRID-ECDF','/cloud_tier2.php?ExecutingSite=UKI-SCOTGRID-ECDF&Path=1.36.3.2');
d.add(33160,33130,'UKI-SCOTGRID-GLASGOW','/cloud_tier2.php?ExecutingSite=UKI-SCOTGRID-GLASGOW&Path=1.36.3.3');
d.add(33170,33010,'UK-SouthGrid','/cloud_tier2.php?Path=1.36.4');
d.add(33180,33170,'EFDA-JET','/cloud_tier2.php?ExecutingSite=EFDA-JET&Path=1.36.4.1');
d.add(33190,33170,'UKI-SOUTHGRID-BHAM-HEP','/cloud_tier2.php?ExecutingSite=UKI-SOUTHGRID-BHAM-HEP&Path=1.36.4.2');
d.add(33200,33170,'UKI-SOUTHGRID-BRIS-HEP','/cloud_tier2.php?ExecutingSite=UKI-SOUTHGRID-BRIS-HEP&Path=1.36.4.3');
d.add(33210,33170,'UKI-SOUTHGRID-CAM-HEP','/cloud_tier2.php?ExecutingSite=UKI-SOUTHGRID-CAM-HEP&Path=1.36.4.4');
d.add(33220,33170,'UKI-SOUTHGRID-OX-HEP','/cloud_tier2.php?ExecutingSite=UKI-SOUTHGRID-OX-HEP&Path=1.36.4.5');
d.add(33230,33170,'UKI-SOUTHGRID-RALPP','/cloud_tier2.php?ExecutingSite=UKI-SOUTHGRID-RALPP&Path=1.36.4.6');
d.add(33240,33170,'UKI-SOUTHGRID-SUSX','/cloud_tier2.php?ExecutingSite=UKI-SOUTHGRID-SUSX&Path=1.36.4.7');
d.add(33250,13,'Ukraine','/cloud_tier2.php?Path=1.38');
d.add(33260,33250,'UA-Tier2-Federation','/cloud_tier2.php?Path=1.38.1');
d.add(33270,33260,'Kharkov-KIPT-LCG2','/cloud_tier2.php?ExecutingSite=Kharkov-KIPT-LCG2&Path=1.38.1.1');
d.add(33280,33260,'UA-BITP','/cloud_tier2.php?ExecutingSite=UA-BITP&Path=1.38.1.2');
d.add(33290,33260,'UA-ISMA','/cloud_tier2.php?ExecutingSite=UA-ISMA&Path=1.38.1.3');
d.add(33300,33260,'UA-KNU','/cloud_tier2.php?ExecutingSite=UA-KNU&Path=1.38.1.4');
d.add(33310,13,'USA','/cloud_tier2.php?Path=1.37');
d.add(33320,33310,'T2_US_Caltech','/cloud_tier2.php?Path=1.37.1');
d.add(33330,33320,'CIT_CMS_T2','/cloud_tier2.php?ExecutingSite=CIT_CMS_T2&Path=1.37.1.1');
d.add(33340,33310,'T2_US_Florida','/cloud_tier2.php?Path=1.37.2');
d.add(33350,33340,'UFlorida-HPC','/cloud_tier2.php?ExecutingSite=UFlorida-HPC&Path=1.37.2.1');
d.add(33360,33310,'T2_US_MIT','/cloud_tier2.php?Path=1.37.5');
d.add(33370,33360,'MIT_CMS','/cloud_tier2.php?ExecutingSite=MIT_CMS&Path=1.37.5.1');
d.add(33380,33310,'T2_US_Nebraska','/cloud_tier2.php?Path=1.37.7');
d.add(33390,33380,'Crane','/cloud_tier2.php?ExecutingSite=Crane&Path=1.37.7.1');
d.add(33400,33380,'Nebraska','/cloud_tier2.php?ExecutingSite=Nebraska&Path=1.37.7.2');
d.add(33410,33380,'Tusker','/cloud_tier2.php?ExecutingSite=Tusker&Path=1.37.7.3');
d.add(33420,33310,'T2_US_Purdue','/cloud_tier2.php?Path=1.37.9');
d.add(33430,33420,'Purdue-Carter','/cloud_tier2.php?ExecutingSite=Purdue-Carter&Path=1.37.9.1');
d.add(33440,33420,'Purdue-Conte','/cloud_tier2.php?ExecutingSite=Purdue-Conte&Path=1.37.9.2');
d.add(33450,33420,'Purdue-Hadoop','/cloud_tier2.php?ExecutingSite=Purdue-Hadoop&Path=1.37.9.3');
d.add(33460,33420,'Purdue-Hammer','/cloud_tier2.php?ExecutingSite=Purdue-Hammer&Path=1.37.9.4');
d.add(33470,33420,'Purdue-Hansen','/cloud_tier2.php?ExecutingSite=Purdue-Hansen&Path=1.37.9.5');
d.add(33480,33420,'Purdue-Rossmann','/cloud_tier2.php?ExecutingSite=Purdue-Rossmann&Path=1.37.9.6');
d.add(33490,33310,'T2_US_UCSD','/cloud_tier2.php?Path=1.37.13');
d.add(33500,33490,'UCSDT2','/cloud_tier2.php?ExecutingSite=UCSDT2&Path=1.37.13.1');
d.add(33510,33310,'T2_US_Wisconsin','/cloud_tier2.php?Path=1.37.12');
d.add(33520,33510,'GLOW','/cloud_tier2.php?ExecutingSite=GLOW&Path=1.37.12.1');
d.add(33530,33310,'US-AGLT2','/cloud_tier2.php?Path=1.37.3');
d.add(33540,33530,'AGLT2','/cloud_tier2.php?ExecutingSite=AGLT2&Path=1.37.3.1');
d.add(33550,33310,'US-LBNL-ALICE','/cloud_tier2.php?Path=1.37.4');
d.add(33560,33550,'NERSC-PDSF','/cloud_tier2.php?ExecutingSite=NERSC-PDSF&Path=1.37.4.1');
d.add(33570,33310,'US-MWT2','/cloud_tier2.php?Path=1.37.6');
d.add(33580,33570,'MWT2','/cloud_tier2.php?ExecutingSite=MWT2&Path=1.37.6.1');
d.add(33590,33310,'US-NET2','/cloud_tier2.php?Path=1.37.8');
d.add(33600,33590,'BU_ATLAS_Tier2','/cloud_tier2.php?ExecutingSite=BU_ATLAS_Tier2&Path=1.37.8.1');
d.add(33610,33590,'HU_ATLAS_Tier2','/cloud_tier2.php?ExecutingSite=HU_ATLAS_Tier2&Path=1.37.8.2');
d.add(33620,33310,'US-SWT2','/cloud_tier2.php?Path=1.37.11');
d.add(33630,33620,'LUCILLE','/cloud_tier2.php?ExecutingSite=LUCILLE&Path=1.37.11.1');
d.add(33640,33620,'OU_OCHEP_SWT2','/cloud_tier2.php?ExecutingSite=OU_OCHEP_SWT2&Path=1.37.11.2');
d.add(33650,33620,'OU_OSCER_ATLAS','/cloud_tier2.php?ExecutingSite=OU_OSCER_ATLAS&Path=1.37.11.3');
d.add(33660,33620,'SWT2_CPB','/cloud_tier2.php?ExecutingSite=SWT2_CPB&Path=1.37.11.4');
d.add(33670,33620,'UTA_SWT2','/cloud_tier2.php?ExecutingSite=UTA_SWT2&Path=1.37.11.5');
d.add(33680,33310,'US-WT2','/cloud_tier2.php?Path=1.37.10');
d.add(33690,33680,'WT2','/cloud_tier2.php?ExecutingSite=WT2&Path=1.37.10.1');