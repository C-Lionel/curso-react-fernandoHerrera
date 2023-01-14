import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";


export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero porro, commodi, cum corrupti velit id laboriosam necessitatibus et eos, quidem officia ratione. Nisi eos veritatis iure deserunt. Voluptatum, praesentium numquam. </Typography> */}


      {/* NothinSelected */}
      <NothingSelectedView />

      {/* NoteView */}
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
  )
}
