import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";


export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector(state => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (

    <JournalLayout>

      {
         (!!active) ? <NoteView /> : <NothingSelectedView />
      }


      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero porro, commodi, cum corrupti velit id laboriosam necessitatibus et eos, quidem officia ratione. Nisi eos veritatis iure deserunt. Voluptatum, praesentium numquam. </Typography> */}

      <IconButton
        // onClick={ (e) => onClickNewNote(e) }
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
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
