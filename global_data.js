
// IDs of the challenges and order in which they are shown
var challenges = ['davis','mot','vot','other'];

// Properties of the challenges
var chall_props = {'davis': {'title': 'Video Object Segmentation Challenge',
                             'description': `In this project we present a new benchmark dataset and evaluation methodology for video object segmentation -
                             DAVIS (Densely Annotated VIdeo Segmentation), which consists of fifty high quality, Full HD video sequences, accompanied by
                             densely annotated, pixel-accurate and per-frame ground truth segmentation. We provide a comprehensive analysis of several
                             state-of-the-art segmentation approaches using three complementary metrics.`,
                             'link'  : 'http://davischallenge.org',
		                     'image' : 'images/davis.png'},
                   'mot': {'title': 'MOTChallenge: Multiple Object Tracking Benchmark',
                             'description': `MOTChallenge is a benchmark for Multiple Object Tracking that collects a large variety of sequences and 
                             				provides a framework for the standardized evaluation of multiple object tracking methods. 
											Currently, the benchmark is focused on multiple people tracking, since
											pedestrians are by far the most studied object in the tracking community. 
											This benchmark includes challening sequences with the highest pedestrian density of any benchmark, with carefully annotated
											bounding boxes, multiple object classes beside pedestrians
											and the level of visibility for every single object of interest.`,
                             'link'  : 'motchallenge.net',
                             'image' : 'images/motchallenge.png'},
                   'vot': {'title': 'Title VOT',
                             'description': 'Bla bla VOT',
                             'link'  : 'Link VOT',
                             'image' : 'images/davis.png'},
                         'other': {'title': 'Title OTHER',
                             'description': 'Bla bla VOT',
                             'link'  : 'Link VOT',
                             'image' : 'images/davis.png'}};

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
                             'image' : 'images/motchallenge.png'},
                   'vot': {'title': 'Title VOT',
                             'description': 'Bla bla VOT',
                             'link'  : 'Link VOT',
                             'image' : 'images/davis.png'}};
*/

// Team
var team_members = ['Pont-Tuset', 'VanGool', 'Caelles', 'Sorkine', 'Perazzi', 'Arbelaez','Leal-Taixe','Roth','Milan','Cremers','Reid','Schindler'];

// Team data
var team_props = {'Pont-Tuset': {'name'  : 'Jordi Pont-Tuset',
                                 'link'  : 'https://jponttuset.cat',
                                 'image' : 'images/PontTuset.png'},
                  'VanGool':    {'name'  : 'Luc Van Gool',
                                 'link'  : 'https://www.vision.ee.ethz.ch/en/members/get_member.cgi?id=1',
                                 'image' : 'images/VanGool.png'},
                  'Caelles':    {'name'  : 'Sergi Caelles',
                                 'link'  : 'https://ch.linkedin.com/in/sergicaelles',
                                 'image' : 'images/Caelles.png'},
                  'Perazzi':    {'name'  : 'Federico Perazzi',
                                 'link'  : 'http://graphics.ethz.ch/~perazzif',
                                 'image' : 'images/Perazzi.jpg'},
                  'Sorkine':    {'name'  : 'A. Sorkine-Hornung',
                                 'link'  : 'http://www.ahornung.net',
                                 'image' : 'images/Sorkine.jpg'},
                  'Arbelaez':   {'name'  : 'Pablo Arbeláez',
                                 'link'  : 'https://biomedicalcomputervision.uniandes.edu.co',
                                 'image' : 'images/Arbelaez.jpg'},
                  'Leal-Taixe': {'name'  : 'Laura Leal-Taixé',
                                 'link'  : 'https://lealtaixe.github.io',
                                 'image' : 'images/LealTaixe.jpg'},
                  'Roth':       {'name'  : 'Stefan Roth',
                                 'link'  : 'http://www.visinf.tu-darmstadt.de/team_members/sroth/sroth.en.jsp',
                                 'image' : 'images/Roth.jpg'},
                  'Milan':      {'name'  : 'Anton Milan',
                                 'link'  : 'http://www.milanton.de/',
                                 'image' : 'images/Milan.jpg'},
                  'Cremers':    {'name'  : 'Daniel Cremers',
                                 'link'  : 'https://vision.in.tum.de/members/cremers',
                                 'image' : 'images/Cremers.jpg'},
                  'Reid':       {'name'  : 'Ian Reid',
                                 'link'  : 'https://cs.adelaide.edu.au/~ianr/',
                                 'image' : 'images/Reid.jpg'},
                  'Schindler':  {'name'  : 'Konrad Schindler',
                                 'link'  : 'http://www.prs.igp.ethz.ch/content/specialinterest/baug/institute-igp/photogrammetry-and-remote-sensing/en/group/people/person-detail.html?persid=143986',
                                 'image' : 'images/Schindler.jpg'}};


                           


