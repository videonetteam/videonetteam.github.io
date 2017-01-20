
// IDs of the challenges and order in which they are shown
var challenges = ['davis','mot','vot'];


// Roots of the images
var chall_im_root = 'images/challenges/';
var people_im_root = 'images/people/';

// Properties of the challenges
var chall_props = {'davis': {'title': 'DAVIS Video Object Segmentation Challenge',
                             'description': 'DAVIS (Densely Annotated VIdeo Segmentation) is a benchmark dataset and evaluation methodology for video object segmentation that consists of fifty high quality, Full HD video sequences, accompanied by densely annotated, pixel-accurate and per-frame ground truth segmentation. It provides a comprehensive analysis of several state-of-the-art segmentation approaches using three complementary metrics.',
                             'link'  : 'http://davischallenge.org',
		                     'image' : 'davis.png'},

                   'mot': {'title': 'MOTChallenge: Multiple Object Tracking Benchmark',
                             'description': 'MOTChallenge is a benchmark for Multiple Object Tracking that collects a large variety of sequences and provides a framework for the standardized evaluation of multiple object tracking methods. Currently, the benchmark is focused on multiple people tracking, since pedestrians are by far the most studied object in the tracking community.  The benchmark includes 2D, 3D and multi-camera challenges.',
                             'link'  : 'motchallenge.net',
                             'image' : 'motchallenge.png'},

                  'vot': {'title': 'VOT Visual Object Tracking Challenge',
        'description': 'The VOT challenges provide the visual tracking community with a precisely defined and repeatable way of comparing short-term trackers as well as a common platform for discussing the evaluation and advancements made in the field of visual tracking. The goal of the challenges is to build up a repository of considerable benchmarks and to organize workshops or similar events in order to push forward research in visual tracking.',
        'link'  : 'http://votchallenge.net/',
        'image' : 'vot_logo_website.png'},

                         'other': {'title': 'Title OTHER',
                             'description': 'Bla bla VOT',
                             'link'  : 'Link VOT',
                             'image' : 'davis.png'}};

// Publication IDs appearing on the left or the right column
/*
var pub_left = ['Perazzi2016'];
var pub_right = [];

// Properties of the publications. Bibtex should be idented left and only with four spaces.
var pub_props = {'Perazzi2016': {'title': 'A Benchmark Dataset and Evaluation Methodology for Video Object Segmentation',
                             	 'authors': `F. Perazzi, J. Pont-Tuset, B. McWilliams, L. Van Gool, M. Gross and A. Sorkine-Hornung`,
                             	 'conf': 'Computer Vision and Pattern Recognition (CVPR)',
                             	 'year': '2016',
                             	 'links'  : '<a href="https://graphics.ethz.ch/~perazzif/davis/files/davis.pdf" target="_blank">[PDF]</a> <a href="https://graphics.ethz.ch/~perazzif/davis" target="_blank">[Project Page]</a>',
			                     'bibtex' :
`@inproceedings{Perazzi2016,
    author = {F. Perazzi and J. Pont-Tuset and B. McWilliams and L. Van Gool and M. Gross and A. Sorkine-Hornung},
    title = {A Benchmark Dataset and Evaluation Methodology for Video Object Segmentation},
    booktitle = {Computer Vision and Pattern Recognition (CVPR)},
    year = {2016}
}`},

                   'mot': {'title': 'Title MOT',
                             'description': 'BLA BLA MOT',
                             'link'  : 'Link MOT',
                             'image' : 'motchallenge.png'},
                   'vot': {'title': 'Title VOT',
                             'description': 'Bla bla VOT',
                             'link'  : 'Link VOT',
                             'image' : 'davis.png'}};
*/

// Team
var team_members = ['Pont-Tuset', 'VanGool', 'Caelles', 'Sorkine', 'Perazzi', 'Arbelaez','Leal-Taixe','Roth','Milan','Cremers','Reid','Schindler','Kristan','Leonardis','Matas','Felsberg','Pflugfelder','Cehovin','Fernandez Dominguez','Vojir','Haeger','Lukezic'];

// Team data
var team_props = {'Pont-Tuset': {'name'  : 'Jordi Pont-Tuset',
                                 'link'  : 'https://jponttuset.cat',
                                 'image' : 'PontTuset.png'},
                  'VanGool':    {'name'  : 'Luc Van Gool',
                                 'link'  : 'https://www.vision.ee.ethz.ch/en/members/get_member.cgi?id=1',
                                 'image' : 'VanGool.png'},
                  'Caelles':    {'name'  : 'Sergi Caelles',
                                 'link'  : 'https://ch.linkedin.com/in/sergicaelles',
                                 'image' : 'Caelles.png'},
                  'Perazzi':    {'name'  : 'Federico Perazzi',
                                 'link'  : 'http://graphics.ethz.ch/~perazzif',
                                 'image' : 'Perazzi.jpg'},
                  'Sorkine':    {'name'  : 'Alexander Sorkine-Hornung',
                                 'link'  : 'http://www.ahornung.net',
                                 'image' : 'Sorkine.jpg'},
                  'Arbelaez':   {'name'  : 'Pablo Arbeláez',
                                 'link'  : 'https://biomedicalcomputervision.uniandes.edu.co',
                                 'image' : 'Arbelaez.jpg'},
                  'Leal-Taixe': {'name'  : 'Laura Leal-Taixé',
                                 'link'  : 'https://lealtaixe.github.io',
                                 'image' : 'LealTaixe.jpg'},
                  'Roth':       {'name'  : 'Stefan Roth',
                                 'link'  : 'http://www.visinf.tu-darmstadt.de/team_members/sroth/sroth.en.jsp',
                                 'image' : 'Roth.jpg'},
                  'Milan':      {'name'  : 'Anton Milan',
                                 'link'  : 'http://www.milanton.de/',
                                 'image' : 'Milan.jpg'},
                  'Cremers':    {'name'  : 'Daniel Cremers',
                                 'link'  : 'https://vision.in.tum.de/members/cremers',
                                 'image' : 'Cremers.jpg'},
                  'Reid':       {'name'  : 'Ian Reid',
                                 'link'  : 'https://cs.adelaide.edu.au/~ianr/',
                                 'image' : 'Reid.jpg'},
                  'Schindler':  {'name'  : 'Konrad Schindler',
                                 'link'  : 'http://www.prs.igp.ethz.ch/content/specialinterest/baug/institute-igp/photogrammetry-and-remote-sensing/en/group/people/person-detail.html?persid=143986',
                                 'image' : 'Schindler.jpg'},
                  'Kristan':    {'name': 'Matej Kristan',
                                 'link'  : 'http://www.vicos.si/People/Matejk',
                                 'image' : 'matej_kristan.png'},

                  'Leonardis':  {'name': 'Aleš Leonardis',
                                 'link'  : 'http://www.vicos.si/People/Ales_Leonardis',
                                 'image' : 'ales_leonardis.png'},
                  			   
                  'Matas':      {'name': 'Jiři Matas',
                                 'link'  : 'http://cmp.felk.cvut.cz/~matas/',
                                 'image' : 'jiri_matas.png'},

                  'Felsberg':   {'name': 'Michael Felsberg',
                                 'link'  : 'http://users.isy.liu.se/cvl/mfe/',
                                 'image' : 'michael_felsberg.png'},

                  'Pflugfelder':{'name': 'Roman Pflugfelder',
                                 'link'  : 'https://at.linkedin.com/in/romanpflugfelder',
                                 'image' : 'roman_pflugfelder.png'},
                  'Cehovin':    {'name': 'Luka Čehovin',
                                 'link'  : 'http://www.vicos.si/People/Luka_Cehovin',
                                 'image' : 'luka_cehovin.png'},
                  'Fernandez Dominguez': {'name': 'Gustavo Fernandez Dominguez',
                                 'link'  : 'mailto:gustavo.fernandez.ait.ac.at',
                                 'image' : 'gustavo_fernandez.png'},
                   
                  'Vojir':      {'name': 'Tomas Vojiř',
                                 'link'  : 'http://cmp.felk.cvut.cz/~vojirtom/',
                                 'image' : 'tomas_vojir.png'},
                   
                  'Haeger':     {'name': 'Gustav Haeger',
                                 'link'  : 'http://www.liu.se/personal/isy/cvl/gusha40?l=en',
                                 'image' : 'gustav_haeger.png'},

                  'Lukezic':    {'name': 'Alan Lukežič',
                                 'link'  : 'mailto:alan.lukezic@fri.uni-lj.si',
                                 'image' : 'alan_lukezic.png'}};


                           


