function DrawFigure(figure)
{
	const div = document.createElement('div');
    div.className = figure;
	var size = Math.random()*200;
	var posTop = (Math.random() * window.innerHeight * 0.75);
	var posLeft = (Math.random() * window.innerWidth * 0.75);
	if (posLeft < size)
	{
		posLeft = size;
		console.log('bop');
	}
	
	if (posTop < size)
	{
		posLeft = size;
		console.log('bop');
	}
	
    div.style.position = 'absolute';
    div.style.top = `${posTop}px`;
	div.style.left = `${posLeft}px`;
	
	switch (figure)
	{
	case 'square':
		div.style.width = `${size}px`;
		div.style.height = `${size}px`;
		div.addEventListener('mouseover', function() { this.style.backgroundColor = 'yellow';});
		div.addEventListener('mouseout', function() { this.style.backgroundColor = 'red';});

		break;
	case 'circle':
		div.style.width = `${size}px`;
		div.style.height = `${size}px`;
		div.addEventListener('mouseover', function() { this.style.backgroundColor = 'yellow';});
		div.addEventListener('mouseout', function() { this.style.backgroundColor = 'green';});
		break;
	case 'triangle':
		div.style.borderLeft = `${size*1.5}px` + ' solid transparent';
        div.style.borderRight = `${size*1.5}px` + ' solid transparent';
        div.style.borderBottom = `${size}px` + ' solid blue';
		div.addEventListener('mouseover', function() { this.style.borderBottomColor = 'yellow';});
		div.addEventListener('mouseout', function() { this.style.borderBottomColor = 'blue';});

		break;
	}
	
	div.addEventListener('click', function() { this.remove();})
	document.body.appendChild(div);
}

function ButtonClick(figure)
{
	var input = document.querySelector('input');
	var inputNumber = Number(input.value);
	if ((inputNumber<0) || (inputNumber>5))
	{
		alert("Количество фигур должно быть от 0 до 5!");
		return 404;
	}
	var i = 0;
	do {
        DrawFigure(figure);    
        i += 1;
		console.log(i);
    } while (inputNumber > i);

}