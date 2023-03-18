import { Grid, Box, Modal, Fade, Typography, Backdrop } from "@mui/material";
import { Card, Button } from "antd";
import React from "react";
const { Meta } = Card;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  radius: 3,
};
const Automation = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open18, setOpen18] = React.useState(false);
  const handleOpen18 = () => setOpen18(true);
  const handleClose18 = () => setOpen18(false);
  return (
    <Grid
      container
      spacing={2}
      padding={5}
      paddingLeft={8}
      sx={{
        background:
          "linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);",
      }}
    >
      <Grid item xs={12} md={6} lg={3} sm={6}>
        <Card
          hoverable
          style={{
            width: 240,
            textAlign: "center",
            paddingLeft: 5,
            boxShadow: "5px 5px 10px #eca0ff",
          }}
          cover={<img alt="example" src="./images/pne-7.jpg" />}
        >
          <Meta
            title=" SICK Sensors – Photoelectric sensors"
            style={{ paddingLeft: 5 }}
          />
          <Button type="primary" onClick={handleOpen} style={{ marginTop: 8 }}>
            BUY NOW
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Photoelectric sensors
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Sick’s vast range of Photoelectric sensors offer precise
                  optics and advanced technology, creating market leading
                  solutions with sensor intelligence. By using the latest ASIC
                  and LED technologies, these sensors offer the highest level of
                  operational reliability regardless of any interference
                  factors. Additional sensor information can be used to simplify
                  modern production processes. This extensive range of
                  photoelectric sensors is used in many automation applications
                  around the world. The SICK range includes Miniature
                  Photoelectricm Sensors, Small Photoelectric Sensors, Compact
                  Photoelectric Sensors, Cylindrical Photoelectric Sensors,
                  Fiber Optic Sensors and Fibers, and Multitask Photoelectric
                  Sensors.
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} sm={6}>
        <Card
          hoverable
          style={{
            width: 240,
            textAlign: "center",
          }}
          cover={<img alt="example" src="./images/pne-8.jpg" />}
        >
          <Meta title="Automation Encoder" />
          <Button type="primary" onClick={handleOpen1} style={{ marginTop: 8 }}>
            BUY NOW
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open1}
            onClose={handleClose1}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open1}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  SICK Sensors – Photoelectric sensors
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Proximity sensors provide non-contact detection of a wide
                  variety of object and media. Sick’s sensors are perfectly
                  suited to industrial applications and requirments. Sick’s
                  inductive, capacitive and magnetic proximity sensors offer a
                  long service life, extreme ruggdness and the utmost precision.
                  Sick sensors intelligently and reliably solve
                  industry-specific and individual automoation tasks. The SICK
                  range includes Inductive proximity Sensors, Capacitive
                  Proximity Sensors and Magnetic Proximity Sensors.
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} sm={6}>
        <Card
          hoverable
          style={{
            width: 240,
            textAlign: "center",
          }}
          cover={<img alt="example" src="./images/pne-9.jpg" />}
        >
          <Meta title="Automation VFD" />
          <Button type="primary" style={{ marginTop: 8 }}>
            BUY NOW
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} sm={6}>
        <Card
          hoverable
          style={{
            width: 240,
            textAlign: "center",
          }}
          cover={<img alt="example" src="./images/pne-10.jpg" />}
        >
          <Meta title="Automation PLC" />
          <Button type="primary" style={{ marginTop: 8 }}>
            BUY NOW
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} sm={6}>
        <Card
          hoverable
          style={{
            width: 240,
            textAlign: "center",
          }}
          cover={<img alt="example" src="./images/pne-11.jpg" />}
        >
          <Meta title="Automation Rotary" />
          <Button type="primary" style={{ marginTop: 8 }}>
            BUY NOW
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} sm={6}>
        <Card
          hoverable
          style={{
            width: 240,
            textAlign: "center",
          }}
          cover={<img alt="example" src="./images/pne-18.jpg" />}
        >
          <Meta title=" Proximity Sensors" />
          <Button
            type="primary"
            onClick={handleOpen18}
            style={{ marginTop: 8 }}
          >
            More Info
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open18}
            onClose={handleClose18}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open18}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  SICK Sensors – Photoelectric sensors
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Proximity sensors provide non-contact detection of a wide
                  variety of object and media. Sick’s sensors are perfectly
                  suited to industrial applications and requirments. Sick’s
                  inductive, capacitive and magnetic proximity sensors offer a
                  long service life, extreme ruggdness and the utmost precision.
                  Sick sensors intelligently and reliably solve
                  industry-specific and individual automoation tasks. The SICK
                  range includes Inductive proximity Sensors, Capacitive
                  Proximity Sensors and Magnetic Proximity Sensors.
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} sm={6}>
        <Card
          hoverable
          style={{
            width: 240,
            textAlign: "center",
          }}
          cover={<img alt="example" src="./images/coming.png" />}
        >
          <Meta title="Coming soon..." />
          <Button type="primary" style={{ marginTop: 8 }}>
            BUY NOW
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} sm={6}>
        <Card
          hoverable
          style={{
            width: 240,
            textAlign: "center",
          }}
          cover={<img alt="example" src="./images/coming.png" />}
        >
          <Meta title="Coming soon..." />
          <Button type="primary" style={{ marginTop: 8 }}>
            BUY NOW
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Automation;
