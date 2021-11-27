export const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY, 
        email VARCHAR(100) UNIQUE NOT NULL, 
        first_name VARCHAR(100), 
        last_name VARCHAR(100), 
        password VARCHAR(100) NOT NULL,
        is_admin BOOL DEFAULT(false),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );`;

// testuser@gmail.com test123
export const seedUsersTableQuery = `
    insert into users values (default, 'testuser@gmail.com', 'Test', 'User', '$2a$10$6gaJbQk6ZPxBISFR1c739uCwbe8mW/CP6Fpa6OhUgo2Gi/k.dX9Si', false, '2020-03-07');
    insert into users values (default, 'seppson1@angelfire.com', 'Susannah', 'Eppson', 'eWIJYBr2uK', false, '2016-11-21');
    insert into users values (default, 'cby2@pen.io', 'Cecilio', 'By', 'X24IwG66', true, '2011-12-31');
    insert into users values (default, 'cnial3@is.gd', 'Chev', 'Nial', 'tuf357zU4aZ', false, '2012-03-23');
    insert into users values (default, 'emartynov4@columbia.edu', 'Emmalyn', 'Martynov', '6mlqh0kd2', true, '2011-03-14');
    insert into users values (default, 'rbowness5@sakura.ne.jp', 'Rafi', 'Bowness', '1xO9ydpx', true, '2014-11-28');
    insert into users values (default, 'fdoxsey6@epa.gov', 'Foss', 'Doxsey', 'IseTmS4R', true, '2011-03-07');
    insert into users values (default, 'mdrejer7@shinystat.com', 'Mordecai', 'Drejer', '1MVFBYl', true, '2019-12-15');
    insert into users values (default, 'hmanger8@com.com', 'Hortense', 'Manger', 'jfwOZ8pYB', false, '2012-02-20');
    insert into users values (default, 'jblowen9@phpbb.com', 'Justin', 'Blowen', '8doLkU', true, '2020-02-04');
    insert into users values (default, 'swallbanka@typepad.com', 'Sven', 'Wallbank', 'YTaAunwoa', false, '2010-10-01');
    insert into users values (default, 'smerrifieldb@dailymail.co.uk', 'Seana', 'Merrifield', 'uoNgs5l3', true, '2014-01-28');
    insert into users values (default, 'pskoofc@surveymonkey.com', 'Phylis', 'Skoof', 'ceyMgL4m', false, '2010-11-27');
    insert into users values (default, 'mmarteld@statcounter.com', 'Muffin', 'Martel', 'eiR8rHm', true, '2016-12-23');
    insert into users values (default, 'tbormane@marriott.com', 'Timoteo', 'Borman', 'NECgfPN', true, '2020-01-19');
    insert into users values (default, 'acasterotf@hao123.com', 'Alane', 'Casterot', 'V6Oo0XKN0tb', true, '2011-05-11');
    insert into users values (default, 'gkinchg@wired.com', 'Guntar', 'Kinch', 'C4w2xKM', true, '2020-06-11');
    insert into users values (default, 'mtrassh@addthis.com', 'Maryl', 'Trass', 'OjtVT0', true, '2020-02-04');
    insert into users values (default, 'aadami@senate.gov', 'Aridatha', 'Adam', 'u3Lo8K4A', false, '2017-04-26');
    insert into users values (default, 'lsigertj@etsy.com', 'Lorianne', 'Sigert', 'FQdC79G2Nsl', false, '2020-03-26');
    insert into users values (default, 'dbeltonk@latimes.com', 'Darwin', 'Belton', '72vp8vj107KG', false, '2011-06-08');
    insert into users values (default, 'kseelyl@ox.ac.uk', 'Kaycee', 'Seely', 'HepJlRDQU0t', false, '2014-03-23');
    insert into users values (default, 'kracherm@wunderground.com', 'Karrah', 'Racher', 'e4b5hL', true, '2011-05-22');
    insert into users values (default, 'byettonn@businessweek.com', 'Boone', 'Yetton', 'S81BHxf', false, '2021-02-11');
    insert into users values (default, 'gmessruthero@indiegogo.com', 'Gradeigh', 'Messruther', 'tRvqnt', true, '2016-08-13');
    insert into users values (default, 'ibroughp@xrea.com', 'Ingemar', 'Brough', 'IRyhY8QLHA', true, '2014-11-30');
    insert into users values (default, 'mwharinq@quantcast.com', 'Mechelle', 'Wharin', 'XhbJNkeRn', false, '2018-10-11');
    insert into users values (default, 'sfroggattr@jigsy.com', 'Shawn', 'Froggatt', 'TcA2pBWOz', true, '2018-02-16');
    insert into users values (default, 'sflorences@delicious.com', 'Shea', 'Florence', 'akBSMOQrx', false, '2010-02-09');
    insert into users values (default, 'wheadt@digg.com', 'Willy', 'Head', 'sn2UlLA2', true, '2019-08-13');
    insert into users values (default, 'opackhamu@deliciousdays.com', 'Orelle', 'Packham', 'dSlN1sg', false, '2010-10-10');
    insert into users values (default, 'amacconnultyv@omniture.com', 'Alvin', 'MacConnulty', 'IH9mYpFdVJP', true, '2020-05-10');
    insert into users values (default, 'learneyw@cnet.com', 'Llywellyn', 'Earney', 'FOsMpZ0', true, '2012-09-01');
    insert into users values (default, 'jbraimex@skyrock.com', 'Jorie', 'Braime', 'a5XZCze', true, '2020-09-01');
    insert into users values (default, 'etrevalliony@weebly.com', 'Elene', 'Trevallion', 'wRNDqccABB2V', false, '2015-08-16');
    insert into users values (default, 'cbungeyz@gnu.org', 'Cherilynn', 'Bungey', '8XsAQ9bJqc0U', false, '2012-05-10');
    insert into users values (default, 'amalim10@phoca.cz', 'Arlena', 'Malim', 'P3f4RqNcJ', false, '2017-03-26');
    insert into users values (default, 'dwike11@newsvine.com', 'Dodi', 'Wike', 'HsBE22EAi0Od', false, '2010-03-22');
    insert into users values (default, 'ekiendl12@indiatimes.com', 'Elyn', 'Kiendl', '3Rj9ZYc3N', false, '2015-08-01');
    insert into users values (default, 'dburlay13@bbc.co.uk', 'Dannie', 'Burlay', 'nxlIZL50HtZx', false, '2017-03-22');
    insert into users values (default, 'amalter14@java.com', 'Arluene', 'Malter', 'JmPKeIBsoPY', false, '2015-01-24');
    insert into users values (default, 'hbillyeald15@purevolume.com', 'Harmon', 'Billyeald', 'bJ7GHUu2', false, '2019-06-06');
    insert into users values (default, 'csaggs16@cargocollective.com', 'Crin', 'Saggs', 'hGpICvFMXk', false, '2015-09-13');
    insert into users values (default, 'hprahl17@arstechnica.com', 'Hercules', 'Prahl', 'l6BiHTNWMQ9', true, '2011-08-16');
    insert into users values (default, 'gholligan18@fda.gov', 'Gilly', 'Holligan', 'y3Von6bs', true, '2019-08-27');
    insert into users values (default, 'fbrumpton19@digg.com', 'Fina', 'Brumpton', '1OvGJEsc', false, '2021-02-12');
    insert into users values (default, 'dsalthouse1a@e-recht24.de', 'Dannel', 'Salthouse', 'kyNEoGtIWce', true, '2016-08-06');
    insert into users values (default, 'kmitchall1b@smugmug.com', 'Killian', 'Mitchall', 'XPSmBKBMRa', true, '2016-08-06');
    insert into users values (default, 'abattisson1c@163.com', 'Arleen', 'Battisson', 'RpCHXy', false, '2017-01-11');
    insert into users values (default, 'hstorek1d@yolasite.com', 'Hillie', 'Storek', 'QsGTkCUSp', true, '2013-12-30');
    insert into users values (default, 'bsego1e@geocities.com', 'Bret', 'Sego', 'xsj9elc', false, '2017-03-25');
    insert into users values (default, 'nworsell1f@intel.com', 'Nissa', 'Worsell', 'SGDzKvi0', true, '2016-04-13');
    insert into users values (default, 'tsushams1g@squidoo.com', 'Thomasina', 'Sushams', 'mCfLTI7lYI', false, '2014-03-31');
    insert into users values (default, 'lswedeland1h@behance.net', 'Lacie', 'Swedeland', '8NuSoI', false, '2015-10-29');
    insert into users values (default, 'csoonhouse1i@vkontakte.ru', 'Cecil', 'Soonhouse', 'nEwVmJ', false, '2010-06-22');
    insert into users values (default, 'ldavis1j@barnesandnoble.com', 'Lorry', 'Davis', 'xorijq8sIc', false, '2014-05-09');
    insert into users values (default, 'jearle1k@nytimes.com', 'Joela', 'Earle', 'vyPv9t', true, '2014-04-18');
    insert into users values (default, 'kstedmond1l@shutterfly.com', 'Kelsey', 'Stedmond', 'JqmRZT96t', false, '2015-04-04');
    insert into users values (default, 'vdominy1m@weather.com', 'Vernon', 'Dominy', 'P9ROLaJO', false, '2015-01-14');
    insert into users values (default, 'tclemont1n@bloglines.com', 'Tremayne', 'Clemont', 'UmricYk1I', true, '2018-08-29');
    insert into users values (default, 'ffaithfull1o@de.vu', 'Freddi', 'Faithfull', 'm6TDXULGnL', false, '2010-10-20');
    insert into users values (default, 'cravenhill1p@bbc.co.uk', 'Christean', 'Ravenhill', 'dKe4mepORGo', false, '2015-08-16');
    insert into users values (default, 'jhenbury1q@newyorker.com', 'Jemimah', 'Henbury', '8d2963XTMPX', true, '2017-04-05');
    insert into users values (default, 'mromaines1r@theglobeandmail.com', 'Miguela', 'Romaines', 'lqwR8PXGY', true, '2020-07-28');
    insert into users values (default, 'jbatsford1s@sciencedaily.com', 'Jodie', 'Batsford', 'a6qyLnsL', false, '2010-07-29');
    insert into users values (default, 'nduly1t@live.com', 'Nehemiah', 'Duly', 'zSjkXdTDt4', false, '2012-03-06');
    insert into users values (default, 'lromero1u@flickr.com', 'Layne', 'Romero', 'ovBDGRApf78', true, '2010-04-30');
    insert into users values (default, 'zdonett1v@alibaba.com', 'Zeke', 'Donett', 'DwWqsYAzbv8', false, '2017-09-09');
    insert into users values (default, 'jburberry1w@google.de', 'Joellen', 'Burberry', 'v8g0upu', false, '2017-12-11');
    insert into users values (default, 'aheigl1x@sohu.com', 'Austin', 'Heigl', 'DZ3HnNZ', true, '2014-10-15');
    insert into users values (default, 'ldenkin1y@wp.com', 'Lauralee', 'Denkin', 'lDyeEGre', false, '2012-01-24');
    insert into users values (default, 'lrickson1z@psu.edu', 'Lizzy', 'Rickson', 'klsRx2', false, '2020-02-27');
    insert into users values (default, 'smccurtin20@cnet.com', 'Shanda', 'McCurtin', 'CVTWZEgjv8HA', true, '2010-07-29');
    insert into users values (default, 'cjoddens21@loc.gov', 'Crissy', 'Joddens', 'G6nC6gmPuG', true, '2015-06-20');
    insert into users values (default, 'jlabell22@bigcartel.com', 'Jerrylee', 'Labell', 'Yd8Vkilu5', true, '2012-03-11');
    insert into users values (default, 'wdeem23@google.pl', 'Wallis', 'Deem', 'bAI6HfA', true, '2010-11-25');
    insert into users values (default, 'xdjorvic24@cmu.edu', 'Xenos', 'Djorvic', 'oDmmQU', true, '2014-06-13');
    insert into users values (default, 'tsheldrick25@dedecms.com', 'Terence', 'Sheldrick', 'OVRWDa8Gv', true, '2013-02-16');
    insert into users values (default, 'awaddilow26@nature.com', 'Amery', 'Waddilow', 'FlQZkGjUD', false, '2019-09-08');
    insert into users values (default, 'idriscoll27@time.com', 'Inessa', 'Driscoll', 'id20O1vnF', true, '2019-06-24');
    insert into users values (default, 'lfeak28@constantcontact.com', 'Ladonna', 'Feak', '2FNXcJ', false, '2010-08-19');
    insert into users values (default, 'ndavidge29@pinterest.com', 'Nona', 'Davidge', 'N9LP4Jl', false, '2020-02-23');
    insert into users values (default, 'liacovacci2a@chronoengine.com', 'Lin', 'Iacovacci', '07Km3JukT', true, '2016-01-04');
    insert into users values (default, 'hpeeke2b@creativecommons.org', 'Herman', 'Peeke', 'sezp4pnCB2', true, '2014-11-14');
    insert into users values (default, 'vliddall2c@clickbank.net', 'Vannie', 'Liddall', 'Wuq6tMiauQB', true, '2010-03-06');
    insert into users values (default, 'fjarrel2d@gmpg.org', 'Florentia', 'Jarrel', 'Pmfey1y5C', false, '2012-04-21');
    insert into users values (default, 'rvanderveldt2e@house.gov', 'Rhona', 'Van der Veldt', 'MiI5N1Kx', false, '2010-02-03');
    insert into users values (default, 'fsaffrin2f@quantcast.com', 'Farlee', 'Saffrin', 'RqFnnx1JE', false, '2015-07-05');
    insert into users values (default, 'blinscott2g@youtube.com', 'Benny', 'Linscott', 'dReKjWP5', false, '2012-09-06');
    insert into users values (default, 'jjankovsky2h@phpbb.com', 'Juline', 'Jankovsky', '3r1yh2KMixl', true, '2015-12-09');
    insert into users values (default, 'asignori2i@eventbrite.com', 'Avram', 'Signori', 'yw3GCBSmMq', true, '2011-12-10');
    insert into users values (default, 'aessel2j@vk.com', 'Arte', 'Essel', '04SdDPyTOHgy', false, '2017-11-20');
    insert into users values (default, 'gweal2k@goodreads.com', 'Gail', 'Weal', 'DX4metfR4e', false, '2019-12-06');
    insert into users values (default, 'ecato2l@mayoclinic.com', 'Enos', 'Cato', '7DMhd03XYM', true, '2014-09-13');
    insert into users values (default, 'gcrooks2m@wix.com', 'Guenna', 'Crooks', 'YGc1LiH', false, '2016-11-01');
    insert into users values (default, 'bportingale2n@time.com', 'Boigie', 'Portingale', 'tUzdutT', true, '2019-11-22');
    insert into users values (default, 'mhandley2o@timesonline.co.uk', 'May', 'Handley', 'a1hIqARoRh1Z', true, '2019-09-30');
    insert into users values (default, 'wgottelier2p@go.com', 'Wain', 'Gottelier', 'dPax7RB', true, '2016-09-02');
    insert into users values (default, 'jclynman2q@smugmug.com', 'Jennifer', 'Clynman', 'aK6nNS4vA', false, '2013-05-23');
    insert into users values (default, 'bdavidy2r@virginia.edu', 'Bartie', 'Davidy', 'mWngKLr7n7r', false, '2011-02-19');`;

export const dropUsersTableQuery = 'DROP TABLE IF EXISTS users;';
