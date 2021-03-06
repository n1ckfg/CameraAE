{  //start script
	app.beginUndoGroup("foo");

	// create project if necessary
	var proj = app.project;
	if(!proj) proj = app.newProject();

	// create new comp named 'Comp 1'
	var compW = 1920; // comp width
	var compH = 1080; // comp height
	var compL = 18;  // comp length (seconds)
	var compRate = 24; // comp frame rate
	var compBG = [0/255,0/255,0/255] // comp background color
	var myItemCollection = app.project.items;
	var myComp = myItemCollection.addComp('Comp 1',compW,compH,1,compL,compRate);
	myComp.bgColor = compBG;

	var camera = myComp.layers.addCamera("Camera 1",[640,360]);

	var p = camera.property("Position");
	var r = camera.property("Orientation");
	var la = camera.property("Point of Interest");

		p.setValueAtTime(0.0, [0.0, 0.0, -1866.6967]);
		r.setValueAtTime(0.0, [0.0, 0.0, 0.0]);
		la.setValueAtTime(0.0, [640.0, 360.0, 0.0]);
		p.setValueAtTime(0.25, [0.0, 0.0, -1866.6967]);
		r.setValueAtTime(0.25, [0.0, 0.0, 0.0]);
		la.setValueAtTime(0.25, [640.0, 360.0, 0.0]);
		p.setValueAtTime(0.5, [0.0, 0.0, -1866.6967]);
		r.setValueAtTime(0.5, [0.0, 0.0, 0.0]);
		la.setValueAtTime(0.5, [640.0, 360.0, 0.0]);
		p.setValueAtTime(0.74999994, [0.0, 0.0, -1866.6967]);
		r.setValueAtTime(0.74999994, [0.0, 0.0, 0.0]);
		la.setValueAtTime(0.74999994, [640.0, 360.0, 0.0]);
		p.setValueAtTime(1.0, [0.0, 0.0, -1866.6967]);
		r.setValueAtTime(1.0, [0.0, 0.0, 0.0]);
		la.setValueAtTime(1.0, [640.0, 360.0, 0.0]);
		p.setValueAtTime(1.25, [-3.1051878E-4, 0.0066205873, -1866.6967]);
		r.setValueAtTime(1.25, [-9.0050447E-4, 0.019199705, 0.0]);
		la.setValueAtTime(1.25, [639.9982, 360.03714, 0.0]);
		p.setValueAtTime(1.4999999, [0.1062889, 0.34998816, -1866.6967]);
		r.setValueAtTime(1.4999999, [0.3195036, 0.7747675, 0.0]);
		la.setValueAtTime(1.4999999, [640.62335, 361.38602, 0.0]);
		p.setValueAtTime(1.7499999, [2.2865798, 4.5765433, -1866.6967]);
		r.setValueAtTime(1.7499999, [2.569161, 4.960097, 0.0]);
		la.setValueAtTime(1.7499999, [643.06354, 365.69125, 0.0]);
		p.setValueAtTime(2.0, [4.7588406, 7.6728225, -1866.6967]);
		r.setValueAtTime(2.0, [5.006185, 8.072311, 0.0]);
		la.setValueAtTime(2.0, [645.5138, 368.87296, 0.0]);
		p.setValueAtTime(2.25, [5.7067447, 8.844203, -1866.6967]);
		r.setValueAtTime(2.25, [6.012924, 9.324788, 0.0]);
		la.setValueAtTime(2.25, [646.58905, 370.218, 0.0]);
		p.setValueAtTime(2.5, [6.0457654, 9.270831, -1866.6967]);
		r.setValueAtTime(2.5, [6.382332, 9.7900715, 0.0]);
		la.setValueAtTime(2.5, [646.9911, 370.7251, 0.0]);
		p.setValueAtTime(2.7499998, [6.1624303, 9.425267, -1866.6967]);
		r.setValueAtTime(2.7499998, [6.5110793, 9.959398, 0.0]);
		la.setValueAtTime(2.7499998, [647.1325, 370.9103, 0.0]);
		p.setValueAtTime(2.9999998, [6.2029757, 9.480208, -1866.6967]);
		r.setValueAtTime(2.9999998, [6.555923, 10.019855, 0.0]);
		la.setValueAtTime(2.9999998, [647.1819, 370.97662, 0.0]);
		p.setValueAtTime(3.25, [6.2784534, 9.6257515, -1866.6967]);
		r.setValueAtTime(3.25, [6.7492967, 10.407117, 0.0]);
		la.setValueAtTime(3.25, [647.54285, 371.70792, 0.0]);
		p.setValueAtTime(3.4999998, [7.486989, 12.217417, -1866.6967]);
		r.setValueAtTime(3.4999998, [8.022429, 13.33313, 0.0]);
		la.setValueAtTime(3.4999998, [648.9578, 375.2133, 0.0]);
		p.setValueAtTime(3.7499998, [9.096699, 17.507545, -1866.6967]);
		r.setValueAtTime(3.7499998, [9.606602, 18.47415, 0.0]);
		la.setValueAtTime(3.7499998, [650.55133, 380.32245, 0.0]);
		p.setValueAtTime(4.0, [9.770741, 19.643286, -1866.6967]);
		r.setValueAtTime(4.0, [10.317309, 20.728937, 0.0]);
		la.setValueAtTime(4.0, [651.30725, 382.72296, 0.0]);
		p.setValueAtTime(4.25, [10.032478, 20.471758, -1866.6967]);
		r.setValueAtTime(4.25, [10.59949, 21.622501, 0.0]);
		la.setValueAtTime(4.25, [651.61224, 383.68906, 0.0]);
		p.setValueAtTime(4.5, [10.1287, 20.776224, -1866.6967]);
		r.setValueAtTime(4.5, [10.704471, 21.95473, 0.0]);
		la.setValueAtTime(4.5, [651.7267, 384.0512, 0.0]);
		p.setValueAtTime(4.7499995, [10.163175, 20.885197, -1866.6967]);
		r.setValueAtTime(4.7499995, [10.742374, 22.07438, 0.0]);
		la.setValueAtTime(4.7499995, [651.76825, 384.18222, 0.0]);
		p.setValueAtTime(5.0, [10.175689, 20.92355, -1866.6967]);
		r.setValueAtTime(5.0, [10.755792, 22.116629, 0.0]);
		la.setValueAtTime(5.0, [651.78253, 384.22855, 0.0]);
		p.setValueAtTime(5.25, [10.177088, 20.936491, -1866.6967]);
		r.setValueAtTime(5.25, [10.757764, 22.130592, 0.0]);
		la.setValueAtTime(5.25, [651.785, 384.24344, 0.0]);
		p.setValueAtTime(5.4999995, [10.177212, 20.937235, -1866.6967]);
		r.setValueAtTime(5.4999995, [10.758, 22.132008, 0.0]);
		la.setValueAtTime(5.4999995, [651.78534, 384.24545, 0.0]);
		p.setValueAtTime(5.75, [10.177229, 20.937338, -1866.6967]);
		r.setValueAtTime(5.75, [10.758033, 22.1322, 0.0]);
		la.setValueAtTime(5.75, [651.7854, 384.24573, 0.0]);
		p.setValueAtTime(5.9999995, [10.177231, 20.937351, -1866.6967]);
		r.setValueAtTime(5.9999995, [10.758037, 22.132225, 0.0]);
		la.setValueAtTime(5.9999995, [651.7854, 384.2458, 0.0]);
		p.setValueAtTime(6.2499995, [10.177231, 20.937353, -1866.6967]);
		r.setValueAtTime(6.2499995, [10.758037, 22.132229, 0.0]);
		la.setValueAtTime(6.2499995, [651.7854, 384.2458, 0.0]);
		p.setValueAtTime(6.5, [10.183177, 21.184685, -1866.6967]);
		r.setValueAtTime(6.5, [10.775279, 22.849493, 0.0]);
		la.setValueAtTime(6.5, [651.8187, 385.6333, 0.0]);
		p.setValueAtTime(6.7499995, [10.387591, 25.978556, -1866.6967]);
		r.setValueAtTime(6.7499995, [11.152371, 27.778381, 0.0]);
		la.setValueAtTime(6.7499995, [652.44696, 390.95624, 0.0]);
		p.setValueAtTime(6.9999995, [12.187339, 31.256586, -1866.6967]);
		r.setValueAtTime(6.9999995, [12.894095, 33.008003, 0.0]);
		la.setValueAtTime(6.9999995, [654.18176, 396.2489, 0.0]);
		p.setValueAtTime(7.25, [13.10531, 33.479042, -1866.6967]);
		r.setValueAtTime(7.25, [13.839777, 35.350033, 0.0]);
		la.setValueAtTime(7.25, [655.16876, 398.73715, 0.0]);
		p.setValueAtTime(7.4999995, [13.455504, 34.31204, -1866.6967]);
		r.setValueAtTime(7.4999995, [14.21613, 36.251995, 0.0]);
		la.setValueAtTime(7.4999995, [655.5746, 399.71512, 0.0]);
		p.setValueAtTime(7.75, [13.584426, 34.6168, -1866.6967]);
		r.setValueAtTime(7.75, [14.356826, 36.585484, 0.0]);
		la.setValueAtTime(7.75, [655.728, 400.0796, 0.0]);
		p.setValueAtTime(8.0, [13.632255, 34.72962, -1866.6967]);
		r.setValueAtTime(8.0, [14.409098, 36.70894, 0.0]);
		la.setValueAtTime(8.0, [655.7851, 400.21448, 0.0]);
		p.setValueAtTime(8.25, [13.649131, 34.770145, -1866.6967]);
		r.setValueAtTime(8.25, [14.427223, 36.753315, 0.0]);
		la.setValueAtTime(8.25, [655.8044, 400.2629, 0.0]);
		p.setValueAtTime(8.5, [13.650851, 34.782997, -1866.6967]);
		r.setValueAtTime(8.5, [14.429736, 36.7673, 0.0]);
		la.setValueAtTime(8.5, [655.8076, 400.2779, 0.0]);
		p.setValueAtTime(8.75, [13.673673, 35.00969, -1866.6967]);
		r.setValueAtTime(8.75, [14.495757, 37.423958, 0.0]);
		la.setValueAtTime(8.75, [655.9352, 401.54745, 0.0]);
		p.setValueAtTime(9.0, [14.257253, 39.69064, -1866.6967]);
		r.setValueAtTime(9.0, [15.366, 42.801357, 0.0]);
		la.setValueAtTime(9.0, [657.2327, 408.1022, 0.0]);
		p.setValueAtTime(9.25, [17.461538, 50.126213, -1866.6967]);
		r.setValueAtTime(9.25, [18.497948, 52.91762, 0.0]);
		la.setValueAtTime(9.25, [660.3912, 418.12933, 0.0]);
		p.setValueAtTime(9.499999, [19.30055, 54.265835, -1866.6967]);
		r.setValueAtTime(9.499999, [20.375343, 57.28393, 0.0]);
		la.setValueAtTime(9.499999, [662.3353, 422.76932, 0.0]);
		p.setValueAtTime(9.75, [19.988317, 55.775948, -1866.6967]);
		r.setValueAtTime(9.75, [21.11415, 58.92396, 0.0]);
		la.setValueAtTime(9.75, [663.13135, 424.55075, 0.0]);
		p.setValueAtTime(10.0, [20.235641, 56.314144, -1866.6967]);
		r.setValueAtTime(10.0, [21.384604, 59.51486, 0.0]);
		la.setValueAtTime(10.0, [663.42664, 425.19778, 0.0]);
		p.setValueAtTime(10.249999, [20.324411, 56.50666, -1866.6967]);
		r.setValueAtTime(10.249999, [21.482214, 59.726856, 0.0]);
		la.setValueAtTime(10.249999, [663.5337, 425.43054, 0.0]);
		p.setValueAtTime(10.5, [20.356724, 56.57693, -1866.6967]);
		r.setValueAtTime(10.5, [21.517431, 59.804012, 0.0]);
		la.setValueAtTime(10.5, [663.5719, 425.515, 0.0]);
		p.setValueAtTime(10.75, [20.365688, 56.601772, -1866.6967]);
		r.setValueAtTime(10.75, [21.527395, 59.83095, 0.0]);
		la.setValueAtTime(10.75, [663.58276, 425.544, 0.0]);
		p.setValueAtTime(10.999999, [20.36608, 56.606464, -1866.6967]);
		r.setValueAtTime(10.999999, [21.528288, 59.836628, 0.0]);
		la.setValueAtTime(10.999999, [663.5841, 425.55057, 0.0]);
		p.setValueAtTime(11.249999, [20.366148, 56.606792, -1866.6967]);
		r.setValueAtTime(11.249999, [21.528418, 59.83725, 0.0]);
		la.setValueAtTime(11.249999, [663.5843, 425.55145, 0.0]);
		p.setValueAtTime(11.5, [20.366156, 56.60684, -1866.6967]);
		r.setValueAtTime(11.5, [21.528433, 59.837337, 0.0]);
		la.setValueAtTime(11.5, [663.58435, 425.55157, 0.0]);
		p.setValueAtTime(11.749999, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(11.749999, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(11.749999, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(11.999999, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(11.999999, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(11.999999, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(12.25, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(12.25, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(12.25, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(12.499999, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(12.499999, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(12.499999, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(12.749999, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(12.749999, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(12.749999, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(13.0, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(13.0, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(13.0, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(13.249999, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(13.249999, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(13.249999, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(13.499999, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(13.499999, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(13.499999, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(13.75, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(13.75, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(13.75, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(13.999999, [20.366158, 56.606842, -1866.6967]);
		r.setValueAtTime(13.999999, [21.528435, 59.83734, 0.0]);
		la.setValueAtTime(13.999999, [663.58435, 425.5516, 0.0]);
		p.setValueAtTime(14.249999, [20.553621, 56.60027, -1866.6967]);
		r.setValueAtTime(14.249999, [22.072079, 59.81828, 0.0]);
		la.setValueAtTime(14.249999, [664.636, 425.5147, 0.0]);
		p.setValueAtTime(14.5, [24.438475, 56.46399, -1866.6967]);
		r.setValueAtTime(14.5, [26.536926, 59.66165, 0.0]);
		la.setValueAtTime(14.5, [670.0808, 425.3237, 0.0]);
		p.setValueAtTime(14.75, [33.554, 56.144207, -1866.6967]);
		r.setValueAtTime(14.75, [36.2136, 59.32218, 0.0]);
		la.setValueAtTime(14.75, [680.86273, 424.94547, 0.0]);
		p.setValueAtTime(14.999999, [45.14297, 55.737667, -1866.6967]);
		r.setValueAtTime(14.999999, [47.67425, 58.920143, 0.0]);
		la.setValueAtTime(14.999999, [692.4536, 424.53888, 0.0]);
		p.setValueAtTime(15.25, [50.232296, 55.559124, -1866.6967]);
		r.setValueAtTime(15.25, [53.00702, 58.733063, 0.0]);
		la.setValueAtTime(15.25, [698.0919, 424.34106, 0.0]);
		p.setValueAtTime(15.5, [52.10087, 55.49358, -1866.6967]);
		r.setValueAtTime(15.5, [55.03304, 58.661995, 0.0]);
		la.setValueAtTime(15.5, [700.29083, 424.26392, 0.0]);
		p.setValueAtTime(15.749999, [52.783516, 55.469635, -1866.6967]);
		r.setValueAtTime(15.749999, [55.779705, 58.635803, 0.0]);
		la.setValueAtTime(15.749999, [701.10626, 424.23532, 0.0]);
		p.setValueAtTime(16.0, [53.029285, 55.46101, -1866.6967]);
		r.setValueAtTime(16.0, [56.049572, 58.62633, 0.0]);
		la.setValueAtTime(16.0, [701.4018, 424.22495, 0.0]);
		p.setValueAtTime(16.25, [53.116547, 55.457947, -1866.6967]);
		r.setValueAtTime(16.25, [56.145668, 58.622963, 0.0]);
		la.setValueAtTime(16.25, [701.5072, 424.22125, 0.0]);
		p.setValueAtTime(16.5, [53.147064, 55.45688, -1866.6967]);
		r.setValueAtTime(16.5, [56.178844, 58.621803, 0.0]);
		la.setValueAtTime(16.5, [701.543, 424.22, 0.0]);
		p.setValueAtTime(16.75, [53.15287, 55.456676, -1866.6967]);
		r.setValueAtTime(16.75, [56.185863, 58.62155, 0.0]);
		la.setValueAtTime(16.75, [701.55115, 424.21973, 0.0]);
		p.setValueAtTime(17.0, [53.15327, 55.456665, -1866.6967]);
		r.setValueAtTime(17.0, [56.186626, 58.62153, 0.0]);
		la.setValueAtTime(17.0, [701.5522, 424.21967, 0.0]);
		p.setValueAtTime(17.25, [53.153328, 55.45666, -1866.6967]);
		r.setValueAtTime(17.25, [56.186733, 58.62153, 0.0]);
		la.setValueAtTime(17.25, [701.55237, 424.21967, 0.0]);
		p.setValueAtTime(17.5, [53.15333, 55.45666, -1866.6967]);
		r.setValueAtTime(17.5, [56.186745, 58.62153, 0.0]);
		la.setValueAtTime(17.5, [701.55237, 424.21967, 0.0]);
		p.setValueAtTime(17.75, [53.15333, 55.45666, -1866.6967]);
		r.setValueAtTime(17.75, [56.186745, 58.62153, 0.0]);
		la.setValueAtTime(17.75, [701.55237, 424.21967, 0.0]);
		p.setValueAtTime(18.0, [53.15333, 55.45666, -1866.6967]);
		r.setValueAtTime(18.0, [56.186745, 58.62153, 0.0]);
		la.setValueAtTime(18.0, [701.55237, 424.21967, 0.0]);
		p.setValueAtTime(18.249998, [53.15333, 55.45666, -1866.6967]);
		r.setValueAtTime(18.249998, [56.186745, 58.62153, 0.0]);
		la.setValueAtTime(18.249998, [701.55237, 424.21967, 0.0]);
		p.setValueAtTime(18.5, [53.15333, 55.45666, -1866.6967]);
		r.setValueAtTime(18.5, [56.186745, 58.62153, 0.0]);
		la.setValueAtTime(18.5, [701.55237, 424.21967, 0.0]);
		p.setValueAtTime(18.75, [52.71128, 54.99545, -1866.6967]);
		r.setValueAtTime(18.75, [52.71128, 54.99545, 0.0]);
		la.setValueAtTime(18.75, [692.7113, 414.99545, 0.0]);
		p.setValueAtTime(18.875, [52.71128, 54.99545, -1866.6967]);
		r.setValueAtTime(18.875, [52.71128, 54.99545, 0.0]);
		la.setValueAtTime(18.875, [692.7113, 414.99545, 0.0]);

	app.endUndoGroup();
}  //end script
