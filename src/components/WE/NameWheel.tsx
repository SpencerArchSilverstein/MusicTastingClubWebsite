import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ControlledCheckbox from '../../devSwitch';

interface PrizeWheelProps {
  options: string[];
  title: string;
}

const PrizeWheel: React.FC<PrizeWheelProps> = ({ options, title }) => {
  const [pick, setPick] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPick(event.target.value as string);
  };
  useEffect(() => {
    switch (pick){
      case "Album of the Week":
        console.log("Album of the Week");
        break;
      case "Runner Up Album of the Week":
        console.log("Runner Up Album of the Week");
        break;
      case "Song of the Week":
        console.log("Song of the Week");
        break;
      case "Runner Up Song of the Week":
        console.log("Runner Up Song of the Week");
        break;
    }
  }, [pick]);

  const [spinning, setSpinning] = useState(false);
  const [angle, setAngle] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState<string | null>(null);
  const [prizeList, setPrizeList] = useState(options);
  const [inputValue, setInputValue] = useState(options.join(', '));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [checked, setChecked] = React.useState(false);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    const targetAngle = angle + 360 * (3 + Math.random() * 2); // Spin 3-5 times
    const duration = 4000; // Duration of spin in milliseconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2; // Ease out cubic

      const newAngle = angle + easedProgress * (targetAngle - angle);
      setAngle(newAngle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        const finalAngle = newAngle % 360;
        const prizeIndex = Math.floor(prizeList.length - (finalAngle / 360) * prizeList.length) % prizeList.length;
        setSelectedPrize(prizeList[prizeIndex]);
      }
    };

    requestAnimationFrame(animate);
  };

  const handlePrizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    const newPrizes = value.split(',').map(prize => prize.trim()).filter(prize => prize !== '');
    setPrizeList(newPrizes);
  };

  const handleDialogClose = () => {
    setPrizeList(prevPrizeList => {
      const updatedPrizeList = prevPrizeList.filter(prize => prize !== selectedPrize);
      setInputValue(updatedPrizeList.join(', '));
      return updatedPrizeList;
    });
    setSelectedPrize(null);
  };

  const handleCopyToClipboard = () => {
    const textToCopy = `${JSON.stringify(prizeList)}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  useEffect(() => {
    setPrizeList(options);
    setInputValue(options.join(', '));
  }, [options]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const drawWheel = () => {
      const radius = canvas.width / 2;
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.save();
      context.translate(radius, radius);
      context.rotate((angle * Math.PI) / 180);

      const arc = (2 * Math.PI) / prizeList.length;
      prizeList.forEach((prize, i) => {
        context.beginPath();
        context.fillStyle = `hsl(${(i * 360) / prizeList.length}, 100%, 75%)`;
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.moveTo(0, 0);
        context.arc(0, 0, radius, i * arc, (i + 1) * arc);
        context.lineTo(0, 0);
        context.fill();
        context.stroke();

        context.save();
        context.rotate((i + 0.5) * arc);
        context.translate(radius * 0.6, 10); // Move text closer to the center
        context.rotate(2 * Math.PI); // Rotate text by 90 degrees to make it vertical
        context.fillStyle = 'black';

        // Adjust font size based on the length of the text and the number of prizes
        const maxFontSize = Math.min(24, (radius * 0.3) / Math.sqrt(prizeList.length));
        let fontSize = maxFontSize;
        context.font = `bold ${fontSize}px Arial`;
        while (context.measureText(prize).width > radius * 0.6 && fontSize > 10) {
          fontSize -= 2;
          context.font = `bold ${fontSize}px Arial`;
        }

        context.textAlign = 'center';
        context.fillText(prize, 0, 0);
        context.restore();
      });

      context.restore();

      // Draw the ticker on the right side without the left border
      context.beginPath();
      context.moveTo(radius + 55, radius);
      context.lineTo(radius + 35, radius - 15);
      context.lineTo(radius + 35, radius + 15);
      context.closePath();
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 4;
      context.strokeStyle = 'white';
      context.stroke();

      // Draw the spin button
      context.beginPath();
      context.arc(radius, radius, 40, 0, 2 * Math.PI);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 4;
      context.strokeStyle = 'white';
      context.stroke();

      // Draw the spin text
      context.fillStyle = 'white';
      context.font = 'bold 20px Arial';
      context.textAlign = 'center';
      context.fillText('SPIN', radius, radius + 7);
    };

    drawWheel();
  }, [angle, prizeList]);

  return (
    <React.Fragment>
     
      <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center" sx={{ backgroundColor: 'white', height: '80vh' }}>
      <br></br>  <br></br>  <br></br> 
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          onClick={spin}
          style={{ backgroundColor: 'black', borderRadius: '50%' }}
        ></canvas>
        <TextField
          label="Have NOT Picked"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handlePrizeChange}
          value={inputValue}
          sx={{ width: 500, marginTop: 3 }}
        />
          <br></br>  <br></br>
          
          {checked ?  
          (<Box display="flex" alignItems="center" color="lightgray">
          <h1>{JSON.stringify(prizeList)}</h1>
          <IconButton onClick={handleCopyToClipboard} sx={{ color: 'lightgray' }}>
            <ContentCopyIcon />
          </IconButton>
        </Box>)  
        : null} 
       
    <div style={{display:"flex",alignItems:"left",color:"lightgray"}}>
      <p style={{fontSize:20,marginBottom:7, marginRight:-5}}>DEV</p>
      <ControlledCheckbox checked={checked} setChecked={setChecked}/>
      </div>  
   
        <Dialog
          open={!!selectedPrize}
          onClose={handleDialogClose}
          maxWidth="xs"
          fullWidth
          PaperProps={{
            sx: {
              mx: 5, // 50px margin on the left and right
              mt: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.85)' // 90% opacity white background
            }
          }}
        >
          <DialogTitle sx={{ textAlign: 'center', fontSize: '2rem' }}>CONGRATULATIONS!</DialogTitle>
          <DialogContent sx={{ textAlign: 'center', fontSize: '1.5rem' }}>
            {selectedPrize}
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handleDialogClose} variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
              Return to Wheel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
     
    </React.Fragment>
  );
};

export default PrizeWheel;
