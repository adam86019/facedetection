hostname = window.location.hostname

if (hostname === 'tkv.io')
{
	(function(f, a, t, h, o, m){
		a[h]=a[h]||function(){
			(a[h].q=a[h].q||[]).push(arguments)
		};
		o=f.createElement('script'),
		m=f.getElementsByTagName('script')[0];
		o.async=1; o.src=t; o.id='fathom-script';
		m.parentNode.insertBefore(o,m)
	})(document, window, '//analytics.tkv.io:10000/tracker.js', 'fathom');
	fathom('trackPageview');
}
else
	console.log('* skipped loading analytics for hostname "' + hostname + '"')
